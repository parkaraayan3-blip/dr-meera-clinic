import { motion } from 'framer-motion';
import { Award, Star, ShieldCheck } from 'lucide-react';

export default function Gallery() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Best Clinic Award",
      desc: "Recognized as the top dermatology practice in Mumbai for patient care, 2023."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "FAAD Certified",
      desc: "Fellow of the American Academy of Dermatology, a mark of global excellence."
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: "15+ Years Excellence",
      desc: "Over 15,000 successful patient journeys and continuous clinical research."
    }
  ];

  return (
    <section id="clinic" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Achievements Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-2">Recognitions</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-12">
            Awards & Achievements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {achievements.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-background-secondary border border-border/50 hover:shadow-sm transition-shadow"
              >
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6 border border-border/50">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-secondary leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clinic Gallery Section */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
              Tour Our Clinic
            </h2>
            <p className="text-secondary mt-4">A safe, sterile, and relaxing environment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 rounded-2xl overflow-hidden relative group min-h-[300px]"
            >
              <img 
                src="/assets/gallery-1.png" 
                alt="Clinic Reception" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-primary shadow-sm">
                Reception & Waiting Lounge
              </div>
            </motion.div>

            <div className="md:col-span-1 flex flex-col gap-6">
              {/* Image 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden relative group aspect-[4/3]"
              >
                <img 
                  src="/assets/gallery-2.png" 
                  alt="Treatment Room" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium text-primary shadow-sm">
                  Treatment Room
                </div>
              </motion.div>

              {/* Image 3 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl overflow-hidden relative group aspect-[4/3]"
              >
                <img 
                  src="/assets/gallery-3.png" 
                  alt="Clinical Products" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium text-primary shadow-sm">
                  Pharmacy
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
