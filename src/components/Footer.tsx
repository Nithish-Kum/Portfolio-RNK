import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a href="https://github.com/Nithish-Kum" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/nithish-kumar-1812952a7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors"><Linkedin size={18} /></a>
          <a href="mailto:nkumarracha17@gmail.com" className="text-muted-foreground hover:text-neon-blue transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
