import { Award, ExternalLink, Bot } from 'lucide-react';

const certifications = [
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage (Deloitte)",
    icon: Award,
    link: "https://media.licdn.com/dms/image/v2/D5622AQG0dSo22OJaUg/feedshare-shrink_800/B56Zhm8D3sH0Ak-/0/1754073677996?e=1775088000&v=beta&t=uxiJrYHCRAk4Tbjg-aF6WQ5a3exMUMSno5BxsIi4Bxo",
    color: "neon-blue",
  },
  {
    title: "Automation Starter",
    issuer: "UiPath",
    icon: Bot,
    link: "/certificates/Automation%20starter.jpg",
    color: "neon-purple",
  },
  {
    title: "Automation Explorer with UiPath Studio Web",
    issuer: "UiPath",
    icon: Bot,
    link: "/certificates/Automation%20explorer.jpg",
    color: "neon-purple",
  },
  {
    title: "UiPath Automation User",
    issuer: "UiPath",
    icon: Bot,
    link: "/certificates/Automation%20user.jpg",
    color: "neon-purple",
  },
  {
    title: "UiPath Automation Developer Associate Training",
    issuer: "UiPath",
    icon: Bot,
    link: "/certificates/Automation%20developer.jpg",
    color: "neon-purple",
  },
  {
    title: "UiPath Agentic Automation Developer Associate Training",
    issuer: "UiPath",
    icon: Bot,
    link: "/certificates/Agent%20automation%20developer.jpg",
    color: "neon-purple",
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco",
    icon: Award,
    link: "/certificates/Introduction%20to%20iot.png",
    color: "neon-blue",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    icon: Award,
    link: "/certificates/Introducation%20to%20modern%20ai.png",
    color: "neon-blue",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    icon: Award,
    link: "/certificates/Introduction%20to%20data%20science.png",
    color: "neon-blue",
  },
  {
    title: "Python Essentials",
    issuer: "Cisco",
    icon: Award,
    link: "/certificates/python%20essentials.png",
    color: "neon-blue",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <p className="text-neon-blue font-mono text-sm mb-2">&lt;certifications&gt;</p>
          <h2 className="section-title">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="tilt-card glass-card-hover p-6 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-secondary border border-border">
                  <cert.icon className={`text-${cert.color}`} size={22} />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{cert.issuer}</span>
              </div>
              <h4 className="text-base font-semibold text-foreground mb-4 flex-1 leading-snug">{cert.title}</h4>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient text-xs py-2 px-3 flex items-center gap-1.5 w-fit"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              )}
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-4">
          <p className="text-neon-blue font-mono text-sm">&lt;/certifications&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
