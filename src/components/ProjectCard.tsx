import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  contribution: string;
}

const ProjectCard = ({
  title,
  role,
  description,
  techStack,
  imageUrl,
  liveUrl,
  githubUrl,
  contribution
}: ProjectCardProps) => {
  return (
    <Card className="group relative bg-gradient-card border-border/30 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-card overflow-hidden">
      {/* Magical glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        {/* Project image */}
        <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-muted">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          
          
        </div>

        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <p className="text-sm text-secondary font-medium">{role}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">My Contribution:</p>
          <p className="text-sm text-muted-foreground">
            {contribution}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border/30 hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-3">
        {liveUrl && (
          <Button variant="outline" size="sm" className="flex-1 group" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 group-hover:animate-pulse" />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant="ghost" size="sm" className="flex-1 group" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 group-hover:animate-bounce" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;