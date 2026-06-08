import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Timeline({ onAchievementClick }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const milestones = [
    {
      year: "2013",
      title: "Advanced Laser Training — Seoul, South Korea",
      desc: "Trained in fractional lasers, Q-switched lasers, and non-ablative skin rejuvenation."
    },
    {
      year: "2014",
      title: "Consultant Dermatologist — Hinduja Hospital",
      desc: "Appointed as Consultant Dermatologist at one of Mumbai's premier medical institutions."
    },
    {
      year: "2016",
      title: "Research Publication",
      desc: "Published a landmark study on melanin disorders in Indian skin, cited by over 80 researchers globally."
    },
    {
      year: "2018",
      title: "Founded Clear Skin Clinic",
      desc: "Opened a private practice in Bandra focused on patient-centric care and evidence-based dermatology."
    },
    {
      year: "2020",
      title: "FAAD Certification",
      desc: "Earned the prestigious Fellowship of the American Academy of Dermatology."
    },
    {
      year: "2022",
      title: "Facility Expansion",
      desc: "Integrated advanced fractional CO2 and PicoSure technology to offer state-of-the-art care."
    }
  ];

  return (
    <section className="py-16 bg-background-secondary overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">Professional Journey</h2>
          <p className="text-secondary mt-4">Click any milestone to read the full story.</p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Background Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          {/* Animated Draw Line */}
          <motion.div 
            style={{ height: timelineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-accent -translate-x-1/2 origin-top"
          />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.year} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-accent -translate-x-1/2 z-10 shadow-sm" />
                  
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:text-left' : 'md:text-right'} cursor-pointer group`}
                    onClick={() => onAchievementClick(item)}
                  >
                    <span className="inline-block px-3 py-1 bg-white border border-border rounded-full text-sm font-semibold text-accent mb-3 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-medium text-primary mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-secondary text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
