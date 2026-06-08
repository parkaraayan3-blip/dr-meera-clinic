import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Slider = ({ beforeImg, afterImg, title, detail }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border">
      <div 
        ref={containerRef}
        className="relative h-64 md:h-80 w-full cursor-ew-resize select-none touch-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* Before Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImg})` }}
        />
        
        {/* After Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${afterImg})`,
            clipPath: `inset(0 0 0 ${sliderPosition}%)`
          }}
        />

        {/* Divider */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white -ml-0.5 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-border shadow-sm flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-3 bg-gray-300 rounded-full" />
              <div className="w-0.5 h-3 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold uppercase tracking-wider text-primary pointer-events-none shadow-sm">
          Before
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold uppercase tracking-wider text-primary pointer-events-none shadow-sm">
          After
        </div>
      </div>
      
      <div className="p-6 flex justify-between items-center border-t border-border">
        <h4 className="font-semibold text-primary">{title}</h4>
        <span className="text-xs font-medium bg-background-secondary text-secondary px-3 py-1 rounded-full">
          {detail}
        </span>
      </div>
    </div>
  );
};

export default function Results() {
  const cases = [
    {
      title: "Acne Treatment",
      detail: "8 weeks",
      beforeImg: "/assets/acne-before.png",
      afterImg: "/assets/acne-after.png"
    },
    {
      title: "Acne Scar Treatment",
      detail: "6 sessions",
      beforeImg: "/assets/scar-before.png",
      afterImg: "/assets/scar-after.png"
    },
    {
      title: "Hair Restoration",
      detail: "16 weeks",
      beforeImg: "/assets/hair-before.png",
      afterImg: "/assets/hair-after.png"
    },
    {
      title: "Pigmentation Check",
      detail: "12 weeks",
      beforeImg: "/assets/pigment-before.png",
      afterImg: "/assets/pigment-after.png"
    }
  ];

  return (
    <section id="results" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-2">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Patient Transformations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Slider {...c} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
