
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      description: "A scalable full-stack e-commerce solution with real-time inventory management, built with React, Node.js, and Python microservices",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Python", "Node.js", "MongoDB", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "System Performance Monitor",
      description: "Low-level system monitoring tool developed in C++ and Python, providing real-time metrics for CPU, memory, and I/O operations with kernel module integration",
      image: "https://images.unsplash.com/photo-1551033541-2075d8363c66",
      technologies: ["C++", "Python", "Linux Kernel", "SystemTap"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Custom Linux Kernel Module",
      description: "Developed a custom kernel module for enhanced system security and process monitoring, implementing syscall hooks and memory protection",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97",
      technologies: ["C", "Linux Kernel", "Assembly", "System Programming"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Cloud-Based Task Management",
      description: "Enterprise task management system with real-time collaboration features, implemented using Java Spring Boot and React",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Distributed System Monitor",
      description: "Advanced monitoring solution for distributed systems, featuring custom protocols and real-time data analysis using eBPF technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      technologies: ["Go", "eBPF", "Python", "Kubernetes", "Prometheus"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "AI-Powered Portfolio Generator",
      description: "Automated portfolio generator using machine learning to analyze and showcase developer projects effectively",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Python", "TensorFlow", "Next.js", "GraphQL"],
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
              <div className="container max-w-7xl mx-auto">
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
