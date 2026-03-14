import { useEffect, useRef, useState } from 'react';
import { Code, BarChart3, Award } from 'lucide-react';

const Counter = ({ target, label, icon: Icon }: { target: string; label: string; icon: React.ElementType }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isNum = !isNaN(Number(target));
  const targetNum = isNum ? parseInt(target) : parseFloat(target);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * targetNum * 100) / 100);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNum]);

  return (
    <div ref={ref} className="glass-card p-6 text-center" data-aos="zoom-in">
      <Icon className="mx-auto mb-3 text-neon-blue" size={28} />
      <div className="text-3xl font-bold gradient-text mb-1">
        {isNum ? count : count.toFixed(2)}+
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <p className="text-neon-blue font-mono text-sm mb-2">&lt;about&gt;</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="neon-line w-20 mb-8" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="glass-card p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a <span className="text-foreground font-semibold">3rd year Computer Science & Engineering student</span> at 
                CMR College of Engineering & Technology (CMRCET), passionate about leveraging technology to solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My expertise spans <span className="text-neon-blue">prompt engineering</span>, <span className="text-neon-purple">data analytics</span>, 
                <span className="text-neon-cyan">AI-powered automation with UiPath</span>, and <span className="text-foreground font-semibold">DSA problem solving in Java</span>. 
                I craft intelligent solutions through creative prompting, data-driven insights, and automation workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently sharpening my <span className="text-foreground font-semibold">Data Structures & Algorithms</span> skills 
                on platforms like LeetCode and CodeChef, while actively preparing for <span className="text-neon-blue">software developer roles and internships</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm eager to contribute to dynamic teams where I can apply my diverse technical skills 
                and continue growing as a developer.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4" data-aos="fade-left">
            <Counter target="8" label="Projects Completed" icon={Code} />
            <Counter target="12" label="Technical Skills" icon={BarChart3} />
            <Counter target="8.44" label="CGPA (out of 10)" icon={Award} />
          </div>
        </div>

        <div data-aos="fade-up" className="mt-4">
          <p className="text-neon-blue font-mono text-sm">&lt;/about&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
