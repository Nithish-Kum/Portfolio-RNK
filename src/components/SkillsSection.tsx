import { Code, Database, Brain, Bot, FileSpreadsheet, BarChart3, Terminal, Cpu, Blocks } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Blocks },
      { name: "JavaScript", icon: Terminal },
    ],
  },
  {
    title: "Data Analytics",
    icon: Database,
    skills: [
      { name: "Excel", icon: FileSpreadsheet },
      { name: "Power BI", icon: BarChart3 },
      { name: "Python", icon: Terminal },
      { name: "Python Modules", icon: Cpu },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "DSA",
    icon: Brain,
    skills: [
      { name: "Java", icon: Terminal },
    ],
  },
  {
    title: "AI Automation",
    icon: Bot,
    skills: [
      { name: "UiPath Studio", icon: Bot },
      { name: "AI Agents", icon: Cpu },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <p className="text-neon-blue font-mono text-sm mb-2">&lt;skills&gt;</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="glass-card-hover p-6"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-secondary border border-border">
                  <cat.icon className="text-neon-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-secondary/50 border border-border hover:border-neon-purple/50 hover:bg-secondary transition-all duration-300 cursor-default"
                  >
                    <skill.icon size={16} className="text-muted-foreground group-hover:text-neon-blue transition-colors duration-300 shrink-0" />
                    <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-4">
          <p className="text-neon-blue font-mono text-sm">&lt;/skills&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
