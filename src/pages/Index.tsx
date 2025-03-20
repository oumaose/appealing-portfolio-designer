
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const projects = [
    {
      title: "Enterprise Microservices Platform",
      description: "A scalable microservices architecture built with Spring Boot and Spring Cloud, featuring service discovery, gateway routing, and distributed configuration. Implemented circuit breaking patterns and achieved 99.9% service uptime.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["Java", "Spring Boot", "Spring Cloud", "Docker", "Kubernetes"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Banking API System",
      description: "Developed a secure banking API system using Spring Security with OAuth2 and JWT authentication. Built RESTful services with comprehensive documentation using Swagger and implemented robust error handling with global exception controllers.",
      image: "https://images.unsplash.com/photo-1551033541-2075d8363c66",
      technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Hibernate"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Real-time Notification Service",
      description: "Engineered a high-throughput notification service using Spring WebFlux and Project Reactor for reactive programming. Integrated with message brokers for event-driven architecture and supported multiple delivery channels.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97",
      technologies: ["Java", "Spring Boot", "WebFlux", "RabbitMQ", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Cloud-Based Task Management",
      description: "Enterprise task management system with Spring Boot backend and React frontend. Implemented complex business logic with workflow engines and integrated with cloud services using AWS SDK and Spring Cloud AWS.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "E-Commerce Microservices Suite",
      description: "Comprehensive e-commerce solution built with domain-driven design principles using Spring Boot microservices. Implemented event sourcing with Apache Kafka for inter-service communication and cache synchronization.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      technologies: ["Java", "Spring Boot", "Kafka", "Redis", "Elasticsearch"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "DevOps Automation Platform",
      description: "CI/CD automation platform with Jenkins pipelines integration, built with Spring Boot. Features include automated code quality checks, containerization with Docker, and deployment to Kubernetes clusters.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Java", "Spring Boot", "Jenkins", "Docker", "Kubernetes"],
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
            
            <section id="projects" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/10">
              <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    A selection of my most significant work, showcasing expertise in Java, Spring Boot, and enterprise application development
                    from microservices to full-stack solutions.
                  </p>
                </div>
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
