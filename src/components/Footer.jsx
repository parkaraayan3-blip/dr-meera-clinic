import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand */}
        <div className="space-y-6">
          <h3 className="text-xl font-medium tracking-tight">Clear Skin Clinic</h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            A premium dermatology practice founded by Dr. Meera Sharma, specializing in evidence-based medical and cosmetic skincare.
          </p>
          <div className="flex items-center space-x-5 pt-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Clinic</h4>
          <ul className="space-y-3">
            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About Dr. Sharma</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Treatments</a></li>
            <li><a href="#results" className="text-gray-300 hover:text-white transition-colors text-sm">Patient Results</a></li>
            <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm">Patient Stories</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Visit Us</h4>
          <address className="not-italic text-gray-300 text-sm space-y-3">
            <p>12/A, Linking Road, Near National College</p>
            <p>Bandra West, Mumbai 400050</p>
            <p className="pt-2 flex items-center gap-2">
              <span className="text-accent-optional">📞</span> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <span className="text-accent-optional">✉️</span> hello@clearskinclinic.in
            </p>
          </address>
        </div>

        {/* Hours */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Hours</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex justify-between">
              <span>Monday – Friday</span>
              <span>10:00 AM – 7:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM – 4:00 PM</span>
            </li>
            <li className="flex justify-between text-gray-400">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Clear Skin Clinic. All rights reserved.</p>
          <span className="hidden md:inline text-gray-700">|</span>
          <p>
            Developed by{' '}
            <a 
              href="https://github.com/parkaraayan3-blip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              Aayan Parkar
            </a>
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
