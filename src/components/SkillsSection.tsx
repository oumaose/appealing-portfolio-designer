
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const skills = [
  { name: "Frontend Development", level: 90, category: "frontend" },
  { name: "React.js & TypeScript", level: 85, category: "frontend" },
  { name: "Python", level: 88, category: "backend" },
  { name: "Java", level: 85, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Database Management", level: 85, category: "backend" },
  { name: "System Architecture", level: 80, category: "backend" },
  { name: "UI/UX Design", level: 75, category: "frontend" },
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
    <section id="skills-section" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 gradient-text">Frontend Development</h3>
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
          
          <div>
            <h3 className="text-xl font-semibold mb-6 gradient-text">Backend Development</h3>
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
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
