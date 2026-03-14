import { Mic } from 'lucide-react';

const SpeakingSection = () => {
  return (
    <section id="speaking" className="section-padding relative">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <p className="text-neon-blue font-mono text-sm mb-2">&lt;speaking&gt;</p>
          <h2 className="section-title">
            Public <span className="gradient-text">Speaking</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="glass-card-hover p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary">
                <Mic className="text-neon-purple" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">TED-Ed Talk</h3>
                <p className="text-sm text-muted-foreground">During School</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Delivered a TED-Ed talk on <span className="text-foreground font-medium">"How Should a Child Understand Their Parents"</span> — 
              exploring the nuances of parent-child communication and empathy. This experience strengthened my public speaking, 
              storytelling, and the ability to present ideas confidently to a large audience.
            </p>

            <div className="relative w-full rounded-lg overflow-hidden aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/e_8wHDYPmRM"
                title="TED-Ed Talk by Nithish Kumar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-4">
          <p className="text-neon-blue font-mono text-sm">&lt;/speaking&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
