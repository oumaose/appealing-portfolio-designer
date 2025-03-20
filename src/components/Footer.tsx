
import { Github, Linkedin, Mail, Twitter, FileDown } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Bonface Odhiambo</h3>
            <p className="text-muted-foreground mb-4">
              Java & Spring Boot Engineer specializing in enterprise application 
              development with expertise in building scalable microservices 
              and cloud-native applications.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-secondary/50">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-secondary/50">
                <a href="https://linkedin.com/in/bonfaceodhiambo-96a6a3174" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-secondary/50">
                <a href="https://x.com/odhiambookello5" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-secondary/50">
                <a href="mailto:principalresearcher138@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills-section" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resume</h3>
            <p className="text-muted-foreground mb-6">
              Download my detailed resume to learn more about my experience with
              Java, Spring Boot, and enterprise application development.
            </p>
            <Button variant="outline" className="flex items-center gap-2">
              <FileDown className="h-4 w-4" />
              <a href="/bonface-odhiambo-resume.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {currentYear} Bonface Odhiambo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
