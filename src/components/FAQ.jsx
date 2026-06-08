import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "How do I know which treatment is right for me?",
      a: "During your initial consultation, Dr. Sharma will thoroughly examine your skin, review your medical history, and discuss your goals. We never recommend a one-size-fits-all approach. You will receive a personalized treatment plan explaining what we recommend and why."
    },
    {
      q: "Are the laser treatments painful?",
      a: "Patient comfort is our top priority. For procedures like laser resurfacing or microneedling, we apply a clinical-grade numbing cream beforehand to ensure the experience is as comfortable as possible."
    },
    {
      q: "How long does a typical consultation last?",
      a: "We schedule 30 minutes for new patient consultations. Good dermatology requires time to listen and evaluate, so you will never feel rushed out the door."
    },
    {
      q: "Do you treat children and teenagers?",
      a: "Yes, Dr. Sharma frequently treats paediatric patients for conditions like eczema, warts, and severe teenage acne, providing gentle, age-appropriate care."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-accent bg-accent-lighter/30' : 'border-border bg-white hover:border-gray-300'}`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-medium text-primary text-lg pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-secondary leading-relaxed border-t border-accent/10 mt-2">
                        <div className="pt-4">{faq.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
