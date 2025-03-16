
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Layers, Cpu, Terminal } from "lucide-react";

const skills = [
  { name: "Frontend Development", level: 90, category: "frontend" },
  { name: "React & TypeScript", level: 92, category: "frontend" },
  { name: "UI/UX Engineering", level: 85, category: "frontend" },
  { name: "Next.js & Modern Frameworks", level: 88, category: "frontend" },
  
  { name: "Python Development", level: 94, category: "backend" },
  { name: "Java/Spring Boot", level: 90, category: "backend" },
  { name: "Node.js/Express", level: 88, category: "backend" },
  { name: "Database Architecture", level: 89, category: "backend" },
  
  { name: "System Architecture", level: 87, category: "systems" },
  { name: "Linux/UNIX Systems", level: 92, category: "systems" },
  { name: "Kernel Development", level: 85, category: "systems" },
  { name: "Distributed Systems", level: 83, category: "systems" },
];

const technologies = [
  "React", "TypeScript", "Python", "Java", "C/C++", "Node.js", 
  "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "Docker", 
  "Kubernetes", "AWS", "GCP", "Linux Kernel", "gRPC", 
  "WebSockets", "GraphQL", "eBPF", "System Programming"
];

const SkillsSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills-section" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With a comprehensive background spanning frontend, backend, and system-level development,
            I bring a holistic approach to solving complex technical challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-card/50 p-8 rounded-xl border border-border/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold gradient-text">Frontend Development</h3>
            </div>
            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category === "frontend")
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transform transition-all duration-500 ${
                      show
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[-50px] opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={show ? skill.level : 0}
                      className="transition-all duration-1000"
                    />
                  </div>
                ))}
            </div>
          </div>
          
          <div className="bg-card/50 p-8 rounded-xl border border-border/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Server className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold gradient-text">Backend Development</h3>
            </div>
            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category === "backend")
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transform transition-all duration-500 ${
                      show
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[50px] opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={show ? skill.level : 0}
                      className="transition-all duration-1000"
                    />
                  </div>
                ))}
            </div>
          </div>
          
          <div className="bg-card/50 p-8 rounded-xl border border-border/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold gradient-text">Systems Engineering</h3>
            </div>
            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category === "systems")
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transform transition-all duration-500 ${
                      show
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[50px] opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={show ? skill.level : 0}
                      className="transition-all duration-1000"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        
        <div className="bg-card/30 p-8 rounded-xl border border-border/50 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Technologies & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/50 text-foreground py-1.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
