
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const texts = ["Web Developer", "Problem Solver", "UI/UX Enthusiast"];
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

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center animate-fade-up space-y-6">
        <span className="text-sm uppercase tracking-wider text-muted-foreground">Welcome to my portfolio</span>
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <div className="h-8">
          <span ref={textRef} className="text-2xl md:text-3xl text-muted-foreground"></span>
        </div>
        <p className="max-w-lg mx-auto text-muted-foreground">
          With 3 years of experience crafting digital experiences, I bring ideas to life through clean code and intuitive design.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button onClick={scrollToProjects} className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
        <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
