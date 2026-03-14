import { Github, ExternalLink, ImageIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const projects = [
  {
    category: "Prompt Engineering",
    items: [
      {
        title: "StudyHub",
        description: "An AI-powered study platform designed to help students organize resources, generate study materials, and boost learning efficiency.",
        github: "https://github.com/Nithish-Kum/STUDY-HUB",
        demo: "https://study-hub-amber-tau.vercel.app/",
      },
      {
        title: "FixMyCity",
        description: "A civic engagement platform that lets citizens report local infrastructure issues and track their resolution using AI-driven categorization.",
        github: "https://github.com/tanishqroym-commits/Fix_My_City",
        demo: "https://fix-my-city-7icb.vercel.app/",
      },
    ],
  },
  {
    category: "Data Analytics",
    items: [
      {
        title: "Sales Dashboard",
        description: "Comprehensive Excel dashboard analyzing sales trends, regional performance, and KPI tracking with interactive visualizations.",
        github: null,
        demo: "/projects/SUPERSTORE-dashboard.xlsx",
        dashboardImage: "/projects/superstore dashboard.png",
      },
      {
        title: "Swiggy Data Analysis",
        description: "Deep-dive analysis of Swiggy food delivery data, uncovering customer behavior patterns, popular cuisines, and order trends.",
        github: null,
        demo: "/projects/Swiggy%20Raw%20Data%20Excel.xlsx",
        dashboardImage: "/projects/swiggy dashboard.png",
      },
      {
        title: "IPL Data Analysis",
        description: "Statistical analysis of IPL cricket data including team performance, player stats, and match outcome predictions.",
        github: "https://github.com/Nithish-Kum/RTRP-PROJECT",
        demo: "#",
      },
    ],
  },
  {
    category: "Web Development",
    items: [
      {
        title: "GPA Calculator Web App",
        description: "A clean, responsive web application to calculate semester and cumulative GPA with an intuitive interface.",
        github: "https://github.com/Nithish-Kum/GPA-app",
        demo: "https://gpa-app-beta.vercel.app/",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <p className="text-neon-blue font-mono text-sm mb-2">&lt;projects&gt;</p>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </div>

        {projects.map((group, gi) => (
          <div key={group.category} className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 font-mono" data-aos="fade-right">
              <span className="text-neon-purple">#</span> {group.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((project, i) => (
                <div
                  key={project.title}
                  className="tilt-card glass-card-hover p-6 flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-auto text-xs text-muted-foreground font-mono">{group.category}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline-glow text-xs py-2 px-3 flex items-center gap-1.5">
                        <Github size={14} /> GitHub
                      </a>
                    )}
                    <a href={project.demo} {...(project.demo.endsWith('.xlsx') ? { download: true } : { target: '_blank' })} rel="noopener noreferrer" className="btn-gradient text-xs py-2 px-3 flex items-center gap-1.5">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    {project.dashboardImage && (
                      <Dialog>
                        <DialogTrigger className="btn-outline-glow text-xs py-2 px-3 flex items-center gap-1.5" style={{ background: "transparent" }}>
                          <ImageIcon size={14} /> View Dashboard
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl bg-black/80 border-white/20 p-2 overflow-hidden flex justify-center">
                          <img src={project.dashboardImage} alt={`${project.title} Dashboard`} className="w-full h-auto max-h-[85vh] object-contain rounded-md" />
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div data-aos="fade-up" className="mt-4">
          <p className="text-neon-blue font-mono text-sm">&lt;/projects&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
