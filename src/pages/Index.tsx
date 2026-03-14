import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CodingProfilesSection from '@/components/CodingProfilesSection';
import CertificationsSection from '@/components/CertificationsSection';
import EducationSection from '@/components/EducationSection';
import WhyHireMeSection from '@/components/WhyHireMeSection';
import SpeakingSection from '@/components/SpeakingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { BackToTop, FloatingSocials } from '@/components/FloatingElements';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <FloatingSocials />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CodingProfilesSection />
      <CertificationsSection />
      <EducationSection />
      <WhyHireMeSection />
      <SpeakingSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
