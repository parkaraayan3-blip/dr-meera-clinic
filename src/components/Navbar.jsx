import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    if (onNavigate) onNavigate('home');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" onClick={handleLinkClick} className="flex items-center z-50">
          <span className="text-xl font-bold tracking-tight text-primary">
            Dr. Meera <span className="font-light">Sharma</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-secondary hover:text-accent transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors">
            <Phone size={16} />
            +91 98765 43210
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="px-5 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-colors shadow-sm"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-primary z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg lg:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-primary font-medium text-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-border flex flex-col gap-4">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-primary font-medium">
                  <Phone size={18} />
                  +91 98765 43210
                </a>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="px-5 py-3 bg-accent text-white text-center rounded-full font-medium"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
