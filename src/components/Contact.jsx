import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you. Your request has been received, and our clinic coordinator will call you shortly.');
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-2">Book a Visit</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Schedule your consultation.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
          
          {/* Form */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-primary mb-6">Request an Appointment</h3>
            
            {status ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-accent-lighter rounded-xl border border-accent/20 text-accent font-medium text-center"
              >
                {status}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-primary">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-primary">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="treatment" className="text-sm font-medium text-primary">Treatment Type</label>
                    <select 
                      id="treatment" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    >
                      <option value="">Select treatment...</option>
                      <option value="general">General Consultation</option>
                      <option value="acne">Acne Treatment</option>
                      <option value="hair">Hair Loss Treatment</option>
                      <option value="pigmentation">Pigmentation Treatment</option>
                      <option value="laser">Laser Procedure</option>
                      <option value="anti-aging">Anti-Aging Treatment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-primary">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium text-primary">Preferred Time</label>
                    <select 
                      id="time" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    >
                      <option value="">Select time...</option>
                      <option value="morning">Morning (10:00 AM – 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM – 3:00 PM)</option>
                      <option value="evening">Evening (3:00 PM – 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-primary">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows="3" 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none"
                    placeholder="Briefly describe your concern..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-medium transition-colors shadow-sm"
                >
                  Book Appointment
                </button>
                <p className="text-xs text-secondary text-center mt-4">
                  By submitting this form, you agree to our clinic's privacy policy. Your data is secure and confidential.
                </p>
              </form>
            )}
          </div>

          {/* Map / Info */}
          <div className="bg-background relative min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.123381665426!2d72.82565141525046!3d19.051390494639967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c919e83060c1%3A0xe54e38e4a9e38e3a!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717833215286!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Clinic Location"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
