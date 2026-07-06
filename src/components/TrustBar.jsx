import { Award, Users, BookOpen, GraduationCap } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      number: "18+",
      label: "Years of Experience"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      number: "15,000+",
      label: "Patients Treated"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      number: "FAAD",
      label: "American Academy of Dermatology"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      number: "12",
      label: "Peer-Reviewed Publications"
    }
  ];

  return (
    <section className="bg-white border-b border-border/50 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="flex flex-col items-center text-center group css-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="bg-[#FAF8F5] p-4 rounded-full mb-4 shadow-sm group-hover:bg-accent/10 transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-primary mb-1">{stat.number}</h3>
              <p className="text-sm font-medium text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
