import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award } from 'lucide-react';

export default function Hero() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center space-x-2 mb-6">
            <span className="bg-accent-optional/10 text-accent-optional px-3 py-1 rounded-full text-sm font-medium tracking-wide">
              Board-Certified Dermatologist
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1] tracking-tight mb-6 text-balance"
          >
            Expert dermatological care you can trust.
          </motion.h1>

          <motion.p 
            variants={fadeUpVariant}
            className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-lg"
          >
            We help patients with acne, hair loss, pigmentation, and other skin concerns through personalized, evidence-based treatment plans.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-8 py-4 bg-accent text-white rounded-full font-medium text-lg hover:bg-accent/90 transition-all shadow-sm"
            >
              Book a Consultation
            </a>
            <a 
              href="#about" 
              className="inline-flex justify-center items-center px-8 py-4 bg-white border border-border text-primary rounded-full font-medium text-lg hover:bg-background-secondary transition-all"
            >
              Meet Dr. Sharma
            </a>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="space-y-2">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <div className="text-xl font-semibold text-primary">18+</div>
              <div className="text-sm text-secondary">Years Experience</div>
            </div>
            <div className="space-y-2">
              <Award className="w-6 h-6 text-accent" />
              <div className="text-xl font-semibold text-primary">FAAD</div>
              <div className="text-sm text-secondary">Certified Expert</div>
            </div>
            <div className="space-y-2">
              <Clock className="w-6 h-6 text-accent" />
              <div className="text-xl font-semibold text-primary">15k+</div>
              <div className="text-sm text-secondary">Patients Treated</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="/assets/custom-img-1.png" 
            alt="Dr. Meera Sharma — Board-Certified Dermatologist" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
        </motion.div>

      </div>
    </section>
  );
}
