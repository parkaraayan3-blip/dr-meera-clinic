import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">Meet Dr. Meera Sharma</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-background-secondary">
              <img 
                src="/assets/custom-img-2.png" 
                alt="Dr. Meera Sharma consulting with a patient" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10 blur-2xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-lg"
          >
            <p>
              Dr. Meera Sharma is a board-certified dermatologist with over 18 years of clinical experience. She completed her MD in Dermatology from KEM Hospital, Mumbai, before pursuing advanced training in Singapore and South Korea.
            </p>
            <p>
              Before founding Clear Skin Clinic in 2018, she served as a consultant dermatologist at Hinduja Hospital. Her research on pigmentation disorders in Indian skin has been widely published in peer-reviewed medical journals.
            </p>
            <p>
              Dr. Sharma believes that good dermatology takes time. She is known for her patient, listening ear, and for creating treatment plans that are sensible, practical, and grounded entirely in clinical evidence.
            </p>

            <div className="my-8 p-8 bg-background-secondary rounded-2xl border border-border/50">
              <p className="text-xl md:text-2xl font-medium text-primary leading-relaxed italic">
                "Every patient is unique. I take time to understand your skin, your concerns, and your goals before recommending any treatment. There are no shortcuts in good dermatology."
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {['Medical Dermatology', 'Cosmetic Dermatology', 'Laser Treatments', 'Paediatric Dermatology', 'Hair Disorders', 'Pigmentation'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-background rounded-full text-sm font-medium text-secondary border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
