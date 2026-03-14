import { GraduationCap } from 'lucide-react';

const education = [
  {
    level: "B.Tech — CSE",
    institution: "CMR College of Engineering & Technology (CMRCET)",
    location: "Hyderabad",
    score: "CGPA: 8.44 / 10",
    period: "2023 — Present",
    current: true,
  },
  {
    level: "Intermediate",
    institution: "Impulse Junior College",
    location: "Nizampet, Hyderabad",
    score: "Score: 95.3%",
    period: "2021 — 2023",
  },
  {
    level: "10th Grade",
    institution: "Paramitha High School",
    location: "Mankammathota, Karimnagar",
    score: "GPA: 10",
    period: "2021",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <p className="text-neon-blue font-mono text-sm mb-2">&lt;education&gt;</p>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-transparent" />

          {education.map((edu, i) => (
            <div
              key={edu.level}
              className="relative flex gap-6 md:gap-8 mb-10 last:mb-0"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Dot */}
              <div className={`relative z-10 w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center shrink-0 ${edu.current ? 'bg-primary pulse-glow-animation' : 'bg-secondary border border-border'}`}>
                <GraduationCap size={20} className={edu.current ? 'text-primary-foreground' : 'text-muted-foreground'} />
              </div>

              {/* Card */}
              <div className="glass-card-hover p-5 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{edu.level}</h3>
                  {edu.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-neon-blue font-mono">Current</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mb-2">{edu.location} · {edu.period}</p>
                <p className="text-sm font-semibold gradient-text">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-4">
          <p className="text-neon-blue font-mono text-sm">&lt;/education&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
