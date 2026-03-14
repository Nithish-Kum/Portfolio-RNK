import { ExternalLink, Trophy, Code } from 'lucide-react';

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Nithishumar/",
    description: "Solving DSA problems & improving algorithmic thinking",
    icon: Code,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/nithish48",
    description: "Competitive programming & contest participation",
    icon: Trophy,
  },
];

const CodingProfilesSection = () => {
  return (
    <section id="coding-profiles" className="section-padding relative">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <p className="text-neon-blue font-mono text-sm mb-2">&lt;coding-profiles&gt;</p>
          <h2 className="section-title">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {profiles.map((profile, i) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover p-6 flex flex-col items-center text-center group"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="p-4 rounded-xl bg-secondary border border-border group-hover:border-neon-purple/50 transition-all duration-300 mb-4">
                <profile.icon className="text-neon-blue group-hover:text-neon-purple transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{profile.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{profile.description}</p>
              <span className="btn-gradient text-sm py-2 px-4 flex items-center gap-2">
                Visit Profile <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-4">
          <p className="text-neon-blue font-mono text-sm">&lt;/coding-profiles&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
