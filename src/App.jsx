import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Footer from './components/Footer';

// Lazy load below-the-fold components (these use framer-motion)
const Timeline = lazy(() => import('./components/Timeline'));
const Services = lazy(() => import('./components/Services'));
const Results = lazy(() => import('./components/Results'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const AchievementBlog = lazy(() => import('./components/AchievementBlog'));

function App() {
  const [activeView, setActiveView] = useState('home');
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleAchievementClick = (achievement) => {
    setSelectedAchievement(achievement);
    setActiveView('blog');
  };

  const handleBackToHome = () => {
    setActiveView('home');
    setSelectedAchievement(null);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-primary selection:bg-accent selection:text-white">
      <Navbar onNavigate={() => handleBackToHome()} />
      
      {activeView === 'blog' ? (
        <Suspense fallback={
          <div className="py-24 text-center text-secondary">
            <p className="text-sm font-medium tracking-wide">Loading...</p>
          </div>
        }>
          <AchievementBlog 
            selectedAchievement={selectedAchievement} 
            onBack={handleBackToHome} 
          />
        </Suspense>
      ) : (
        <main>
          {/* Above-the-fold: no framer-motion, renders instantly */}
          <Hero />
          <TrustBar />
          <About />
          
          {/* Below-the-fold: lazy loaded with framer-motion */}
          <Suspense fallback={null}>
            <Timeline onAchievementClick={handleAchievementClick} />
            <Services />
            <Results />
            <Gallery />
            <Testimonials />
            <Contact />
          </Suspense>
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
