
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "React.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "Node.js", level: 70 },
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
        <div className="space-y-8">
          {skills.map((skill, index) => (
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
    </section>
  );
};

export default SkillsSection;
