
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground line-clamp-3">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-secondary/20 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          {githubUrl && (
            <Button variant="outline" size="sm" className="gap-2">
              <Github className="h-4 w-4" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button variant="secondary" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Demo
            </Button>
          )}
          {!githubUrl && !liveUrl && (
            <Button variant="outline" size="sm" className="gap-2" disabled>
              <Lock className="h-4 w-4" />
              Private
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
