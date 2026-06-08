import { useEffect } from 'react';
import { ArrowLeft, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const detailedAchievements = [
  {
    year: "2013",
    title: "Advanced Laser Training — Seoul, South Korea",
    desc: "Trained in fractional lasers, Q-switched lasers, and non-ablative skin rejuvenation.",
    content: "During this intensive fellowship in Seoul, Dr. Sharma worked alongside world-renowned laser specialists. She mastered the nuances of treating Asian skin types, which are notoriously prone to post-inflammatory hyperpigmentation. This foundational training shaped her conservative, highly effective approach to laser therapy. The experience also instilled a deep appreciation for combining traditional dermatology with cutting-edge aesthetic technology.",
    image: "/assets/custom-img-2.png"
  },
  {
    year: "2014",
    title: "Consultant Dermatologist — Hinduja Hospital",
    desc: "Appointed as Consultant Dermatologist at one of Mumbai's premier medical institutions.",
    content: "As a consultant at Hinduja Hospital, Dr. Sharma handled complex dermatological cases, ranging from severe autoimmune skin disorders to advanced cutaneous oncology. Her tenure here established her reputation as a meticulous diagnostician and a compassionate caregiver. She led numerous multi-disciplinary teams to treat rare skin conditions, cementing her authority in clinical dermatology.",
    image: "/assets/custom-img-1.png"
  },
  {
    year: "2016",
    title: "Research Publication",
    desc: "Published a landmark study on melanin disorders in Indian skin, cited by over 80 researchers globally.",
    content: "Driven by the lack of targeted research for Indian skin types, Dr. Sharma spearheaded a clinical study on melanin disorders. Her findings on melasma and post-inflammatory hyperpigmentation were published in the International Journal of Dermatology. This research fundamentally shifted how localized hyperpigmentation is treated in South Asian demographics, emphasizing barrier repair over aggressive peeling.",
    image: "/assets/custom-img-2.png"
  },
  {
    year: "2018",
    title: "Founded Clear Skin Clinic",
    desc: "Opened a private practice in Bandra focused on patient-centric care and evidence-based dermatology.",
    content: "Recognizing a gap between clinical excellence and premium patient experience, Dr. Sharma founded Clear Skin Clinic. The vision was simple: a safe, sterile, and deeply comforting environment where patients could receive honest, evidence-based treatments without the pressure of commercial upselling. The clinic quickly became a trusted name in Mumbai.",
    image: "/assets/custom-img-1.png"
  },
  {
    year: "2020",
    title: "FAAD Certification",
    desc: "Earned the prestigious Fellowship of the American Academy of Dermatology.",
    content: "In 2020, Dr. Sharma achieved the Fellowship of the American Academy of Dermatology (FAAD), the highest distinction for dermatologists globally. This certification requires rigorous examination and continuous medical education. It represents her commitment to staying at the absolute forefront of global dermatological advancements.",
    image: "/assets/custom-img-2.png"
  },
  {
    year: "2022",
    title: "Facility Expansion",
    desc: "Integrated advanced fractional CO2 and PicoSure technology to offer state-of-the-art care.",
    content: "To meet growing patient needs, Clear Skin Clinic underwent a massive facility expansion. Dr. Sharma integrated the world's most advanced laser systems, including PicoSure and Fractional CO2. This allowed the clinic to offer unparalleled results in acne scar revision and tattoo removal, all while maintaining the warm, personal touch the clinic is known for.",
    image: "/assets/custom-img-1.png"
  }
];

export default function AchievementBlog({ onBack, selectedAchievement }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // If a specific achievement was clicked, try to scroll to it after a short delay
    if (selectedAchievement) {
      setTimeout(() => {
        const element = document.getElementById(`achievement-${selectedAchievement.year}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [selectedAchievement]);

  return (
    <div className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-secondary hover:text-accent transition-colors font-medium mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Clinic Profile
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
            Professional Journey & Milestones
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            A deeper look into Dr. Meera Sharma's academic achievements, clinical research, and the continuous pursuit of dermatological excellence over the past 18 years.
          </p>
        </div>

        <div className="space-y-20">
          {detailedAchievements.map((item, index) => (
            <motion.article 
              id={`achievement-${item.year}`}
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border/50"
            >
              <div className="h-64 md:h-96 w-full relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl flex items-center gap-2 shadow-sm">
                  <Calendar size={16} className="text-accent" />
                  <span className="font-semibold text-primary">{item.year}</span>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-accent" size={24} />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">{item.title}</h2>
                </div>
                
                <h3 className="text-lg font-medium text-accent mb-6">
                  {item.desc}
                </h3>
                
                <p className="text-secondary leading-relaxed text-lg">
                  {item.content}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
