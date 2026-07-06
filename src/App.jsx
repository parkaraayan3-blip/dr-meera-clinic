import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

// Lazy load below-the-fold or conditional components
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
      
      <Suspense fallback={
        <div className="py-24 text-center text-secondary">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm font-medium tracking-wide">Loading clinic details...</p>
        </div>
      }>
        {activeView === 'blog' ? (
          <AchievementBlog 
            selectedAchievement={selectedAchievement} 
            onBack={handleBackToHome} 
          />
        ) : (
          <main>
            <Hero />
            <TrustBar />
            <About />
            <Timeline onAchievementClick={handleAchievementClick} />
            <Services />
            <Results />
            <Gallery />
            <Testimonials />
            <Contact />
          </main>
        )}
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default App;
