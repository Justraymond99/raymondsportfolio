import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg-dark.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/95" />
      </div>

      {/* Floating decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-1/4 left-1/4 text-accent w-6 h-6 animate-float opacity-15">✨</span>
        <span className="absolute top-1/3 right-1/3 text-accent w-4 h-4 animate-sparkle opacity-20">⚡</span>
        <span className="absolute bottom-1/3 left-1/5 text-accent w-5 h-5 animate-float opacity-10">🚀</span>
        <span className="absolute top-2/3 right-1/4 text-accent w-3 h-3 animate-float opacity-18">💎</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8 animate-fade-in">
          {/* Title with subtle glow effect */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Raymond Sekyere
            <span className="block text-4xl md:text-5xl text-secondary mt-2">
              Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <i>Full-Stack</i>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ExternalLink className="w-5 h-5 group-hover:animate-pulse" />
              View Projects
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;