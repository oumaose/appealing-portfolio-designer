
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Portfolio Generator",
      description: "An automated portfolio generator for developers",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pointer-events-none" />
        
        {/* Content */}
        <div className="relative">
          <HeroSection />
          
          <div className="space-y-20">
            <SkillsSection />
            
            <section id="projects" className="py-20 px-4">
              <div className="container max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </div>
            </section>
            
            <ContactSection />
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
