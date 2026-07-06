# Core Web Vitals & Lighthouse Optimization Plan

This plan details a comprehensive architectural refactor of the React application to achieve a 95+ Google Lighthouse score, LCP < 2.5s, INP < 200ms, and total page weight under 2MB.

## User Review Required
> [!IMPORTANT]
> The optimization strategy will rely heavily on converting your large `.png` assets to next-gen formats (`.webp`). We will use `cwebp` (or equivalent build plugins/scripts) to automatically process these. Please review the strategy below to ensure it aligns with your environment.

## Open Questions
- **Image Processing Strategy:** Should I write a Node.js script (using `sharp`) to batch convert and resize all `public/assets/*.png` files into multiple `.webp` sizes (`400w`, `800w`, `1200w`), or would you prefer I configure a Vite plugin like `vite-plugin-image-presets` / `vite-plugin-pwa` to handle this at build time? (A Node script generating static files is often more robust for static deployments like Vercel).
- **Hero Image Implementation:** The `Hero` section currently relies on CSS `background-image`. To properly optimize LCP (Largest Contentful Paint) with `fetchpriority="high"`, I will convert this CSS background into a semantic HTML `<picture>` tag or a responsive `<img srcSet="...">` element. Is this acceptable?

---

## Proposed Changes

### Build & Asset Pipeline

#### [NEW] `scripts/optimize-images.js`
- Create a Node.js utility script utilizing `sharp` to process the `public/assets` folder.
- Convert all heavy `.png` files (like `custom-img-1.png`, `acne-before.png`) into optimized `.webp` formats at multiple resolutions (e.g., 400w, 800w, 1200w) to support responsive `<picture>` structures.

### Application Architecture (Lazy Loading)

#### [MODIFY] `src/App.jsx`
- Replace static imports with `React.lazy()` for below-the-fold components to aggressively reduce the initial JavaScript bundle size.
- Components to lazy load: `Services`, `Results`, `Gallery`, `Testimonials`, `Contact`, `AchievementBlog`.
- Wrap the `<main>` and `activeView` conditional rendering in a React `<Suspense>` boundary with a lightweight loading skeleton.

### Render-Blocking & Fonts

#### [MODIFY] `index.html`
- Add `<link rel="preload" as="image" href="/assets/custom-img-1-optimized.webp" fetchpriority="high">` to fix the LCP metric.
- Preconnect to Google Fonts and load the `Inter` font weights (400, 500, 600) asynchronously with `display=swap`.

#### [MODIFY] `src/index.css`
- Remove the render-blocking `@import` for Google Fonts.
- Refactor the background-image classes (like `.hero-pattern`, `.result-before`, `.result-after`) to ensure they don't block layout or cause forced reflows.

### Component Level Optimization

#### [MODIFY] `src/components/Hero.jsx`
- Replace the CSS background implementation with a responsive `<img fetchpriority="high" srcSet="..." />` to prioritize immediate visibility of the largest element.

#### [NEW] `src/components/OptimizedImage.jsx`
- Create a reusable `<OptimizedImage>` wrapper component.
- Responsibilities: Manage `srcSet`, `sizes`, `loading="lazy"`, `decoding="async"`, and render intrinsic aspect ratio wrappers to prevent CLS (Cumulative Layout Shift).

#### [MODIFY] `src/components/Results.jsx` (and Gallery/Timeline)
- Implement `<OptimizedImage>` for all before/after images.
- Ensure all heavy images use `loading="lazy"`.

#### [MODIFY] Framer Motion Integration
- Audit `Hero.jsx`, `Timeline.jsx`, `Services.jsx` to ensure `viewport={{ once: true, margin: "100px" }}` is applied to all scroll-triggered animations to prevent continuous CPU layout recalculations and fix forced reflows.

---

## Verification Plan

### Automated Tests
- Run `npm run build` to verify the production bundle size has dropped below 200KB (JavaScript chunks).

### Manual Verification
- Execute Google Lighthouse via Chrome DevTools in Incognito Mode.
- Verify Network Tab payload is < 2MB.
- Verify LCP image loads as the first asset with `fetchpriority="high"`.
- Validate that Mobile view does not download 1200px desktop assets.
