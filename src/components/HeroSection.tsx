
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    // Include MERN stack and Python in addition to Java & Spring Boot
    const texts = ["Java Developer", "Spring Boot Engineer", "MERN Stack Developer", "Python Developer", "Microservices Architect"];
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    
    const type = () => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }
      
      if (textRef.current) {
        textRef.current.textContent = currentText;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    type();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center animate-fade-up space-y-6 max-w-3xl">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-xl">
            <AvatarImage src="lovable-uploads/d0b409cd-af5a-4ef2-9585-843fa515db07.png" alt="Bonface Odhiambo" />
            <AvatarFallback>BO</AvatarFallback>
          </Avatar>
        </div>
        <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Java & Spring Boot Engineer</span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-primary gradient-text">Bonface Odhiambo</span>
        </h1>
        <div className="h-8">
          <span ref={textRef} className="text-2xl md:text-3xl text-muted-foreground font-medium"></span>
        </div>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Specialized in Java and Spring Boot with extensive experience in building enterprise-grade applications, microservices architecture, and scalable backend systems. Also proficient in MERN stack and Python development.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <Button onClick={scrollToProjects} size="lg" className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
          <Button variant="secondary" size="lg">
            <FileDown className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
        <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
