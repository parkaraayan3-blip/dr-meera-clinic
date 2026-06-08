import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Results from './components/Results';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AchievementBlog from './components/AchievementBlog';

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
      
      <Footer />
    </div>
  );
}

export default App;
