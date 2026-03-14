import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Profiles', href: '#coding-profiles' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);

      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card py-3' : 'py-5 bg-transparent'}`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#home" className="text-xl font-bold gradient-text font-mono">RNK</a>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-foreground gradient-text drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]'
                    : 'text-muted-foreground hover:text-neon-blue hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/Nithish-Kum" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/nithish-kumar-1812952a7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:nkumarracha17@gmail.com" className="text-muted-foreground hover:text-neon-blue transition-colors"><Mail size={18} /></a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden glass-card mt-2 mx-4 p-4 rounded-lg">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-neon-blue hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-4 mt-3 pt-3 border-t border-border">
              <a href="https://github.com/Nithish-Kum" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/nithish-kumar-1812952a7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors"><Linkedin size={18} /></a>
              <a href="mailto:nkumarracha17@gmail.com" className="text-muted-foreground hover:text-neon-blue transition-colors"><Mail size={18} /></a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
