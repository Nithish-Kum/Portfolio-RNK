import { useState } from 'react';
import { Phone, Mail, Linkedin, Github, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nkumarracha17@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <div data-aos="fade-up">
          <p className="text-neon-blue font-mono text-sm mb-2">&lt;contact&gt;</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="neon-line w-20 mb-12" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div data-aos="fade-right">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm actively looking for <span className="text-foreground font-semibold">software developer roles and internships</span>. 
              Feel free to reach out — let's build something great together.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "8008250528", href: "tel:8008250528" },
                { icon: Mail, label: "Email", value: "nkumarracha17@gmail.com", href: "mailto:nkumarracha17@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "Nithish Kumar", href: "https://www.linkedin.com/in/nithish-kumar-1812952a7" },
                { icon: Github, label: "GitHub", value: "Nithish-Kum", href: "https://github.com/Nithish-Kum" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass-card-hover p-4 flex items-center gap-4 group"
                >
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-neon-blue" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block font-mono">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block font-mono">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block font-mono">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn-gradient w-full flex items-center justify-center gap-2">
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-4">
          <p className="text-neon-blue font-mono text-sm">&lt;/contact&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
