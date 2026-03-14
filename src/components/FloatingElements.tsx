import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full btn-gradient glow-effect"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

const FloatingSocials = () => (
  <div className="fixed left-4 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4">
    <a href="https://github.com/Nithish-Kum" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue hover:-translate-y-1 transition-all"><Github size={18} /></a>
    <a href="https://www.linkedin.com/in/nithish-kumar-1812952a7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue hover:-translate-y-1 transition-all"><Linkedin size={18} /></a>
    <a href="mailto:nkumarracha17@gmail.com" className="text-muted-foreground hover:text-neon-blue hover:-translate-y-1 transition-all"><Mail size={18} /></a>
    <div className="w-px h-20 bg-muted-foreground/30" />
  </div>
);

export { BackToTop, FloatingSocials };
