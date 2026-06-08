import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, Droplets } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Medical Dermatology",
      desc: "Diagnosis and evidence-based treatment for acne, eczema, psoriasis, rosacea, and complex skin conditions.",
      icon: <Stethoscope className="w-6 h-6 text-accent" />
    },
    {
      title: "Hair & Scalp Health",
      desc: "Comprehensive evaluation and medical management of hair loss, alopecia, and scalp infections.",
      icon: <Droplets className="w-6 h-6 text-accent" />
    },
    {
      title: "Cosmetic Dermatology",
      desc: "Subtle, natural-looking enhancements using medical-grade peels, lasers, and injectables.",
      icon: <Sparkles className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-2">Treatments</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-4">
            Comprehensive dermatological care.
          </h2>
          <p className="text-lg text-secondary">
            We provide medically sound treatments tailored to your unique skin type and concerns. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div 
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border/50 hover:shadow-sm hover:border-border transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                {svc.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {svc.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
