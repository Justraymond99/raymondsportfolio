import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Zap, Code, Palette, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Mastering both frontend magic and backend sorcery across multiple worlds"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
              description: "Crafting beautiful interfaces that inspire and engage users"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Making applications as fast as a keyblade strike across dimensions"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Problem Solving",
              description: "Unraveling complex challenges with innovative solutions"
    }
  ];

  const currentFocus = [
    "Learning Advanced Three.js for immersive 3D experiences",
    "Exploring AI/ML integration in web applications",
    "Contributing to open-source projects",
    "Building progressive web apps with offline capabilities"
  ];

  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-transparent to-muted/20">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-1/4 left-10 text-secondary/20 w-6 h-6 animate-sparkle" />
        <span className="absolute top-1/2 right-10 text-accent/20 w-8 h-8 animate-float">✨</span>
        <Star className="absolute bottom-1/4 left-1/4 text-primary/20 w-4 h-4 animate-glow" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Personal story */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-gradient-card border-border/30 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 text-accent animate-glow">⚡</span>
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I started my coding journey with curiosity and determination. What began as simple HTML pages has evolved into crafting complex 
                    applications that bring joy and solve real-world problems.
                  </p>
                  <p>
                    I believe in the power of code to connect us all, whether it's building seamless user experiences or architecting robust backend systems.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or merely having a good time with friends.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Current focus */}
            <Card className="bg-gradient-card border-border/30 hover:border-secondary/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6 text-secondary animate-sparkle" />
                  Currently Learning
                </h3>
                <ul className="space-y-3">
                  {currentFocus.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">
              What I'm <span className="text-primary">Good At</span>
            </h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="group bg-gradient-card border-border/30 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:text-primary-glow group-hover:animate-glow transition-all duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {skill.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Ready to embark on a new adventure together?
          </p>
          <Button variant="hero" size="lg" className="group">
            <span className="w-5 h-5 group-hover:animate-bounce">🚀</span>
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;