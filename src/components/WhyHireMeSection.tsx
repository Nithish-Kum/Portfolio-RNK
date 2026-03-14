import { Target, BarChart3, Bot, Brain, Code, CheckCircle2 } from 'lucide-react';

const points = [
  { text: "Strong DSA problem solving in Java", icon: Brain },
  { text: "Experience with Data Analytics tools (Excel, Power BI, Python, SQL)", icon: BarChart3 },
  { text: "AI Automation using UiPath Studio & AI Agents", icon: Bot },
  { text: "Prompt Engineering projects (StudyHub, FixMyCity)", icon: Target },
  { text: "Active coding practice on LeetCode and CodeChef", icon: Code },
];

const WhyHireMeSection = () => {
  return (
    <section id="why-hire-me" className="section-padding relative">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <p className="text-neon-blue font-mono text-sm mb-2">&lt;why-hire-me&gt;</p>
          <h2 className="section-title">
            Why <span className="gradient-text">Hire Me</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8" data-aos="fade-up">
            <div className="flex flex-col gap-5">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group"
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                >
                  <div className="p-2 rounded-lg bg-secondary border border-border group-hover:border-neon-purple/50 transition-all duration-300 shrink-0 mt-0.5">
                    <point.icon className="text-neon-blue group-hover:text-neon-purple transition-colors duration-300" size={20} />
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-neon-cyan shrink-0" />
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-4">
          <p className="text-neon-blue font-mono text-sm">&lt;/why-hire-me&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
