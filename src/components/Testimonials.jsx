import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya M.",
      treatment: "Acne Treatment",
      text: "Dr. Sharma took the time to understand my skin concerns and created a treatment plan that actually worked. After years of struggling with acne, I finally have clear skin. She explained every step and never pushed unnecessary procedures."
    },
    {
      name: "Rahul K.",
      treatment: "Hair Loss Treatment",
      text: "I was sceptical about PRP therapy, but Dr. Sharma explained everything clearly and set realistic expectations. Six months later, I can see real improvement in my hair density. Very professional and honest doctor."
    },
    {
      name: "Anjali D.",
      treatment: "Pigmentation Treatment",
      text: "The melasma on my face had been bothering me for years. Dr. Sharma's treatment plan was methodical and the results speak for themselves. She also educated me on sun protection, which made a real difference."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-2">Patient Stories</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-secondary mt-4">Real stories from people who trusted us with their skin and hair journeys.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border/30 relative"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-secondary leading-relaxed mb-8 italic">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{item.name}</h4>
                  <p className="text-sm text-secondary">{item.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
