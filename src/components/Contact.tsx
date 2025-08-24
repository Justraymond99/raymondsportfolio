import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Download, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-muted/20 to-transparent">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-20 left-20 text-accent/10 w-16 h-16 animate-float">✨</span>
        <span className="absolute bottom-20 right-20 text-primary/10 w-12 h-12 animate-glow">⚡</span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Connect <span className="text-primary">With Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's create something magical together. Whether it's a new project, collaboration, 
                          or just a friendly chat about code and technology!
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-gradient-card border-border/30 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-6 h-6 text-accent animate-glow">⚡</span>
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300 group">
                    <Mail className="w-6 h-6 text-primary group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:raymondsekyere99@gmail.com" className="text-primary hover:text-primary-glow transition-colors duration-300">
                        raymondsekyere99@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300 group">
                    <Github className="w-6 h-6 text-primary group-hover:animate-pulse" />
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <a href="https://github.com/justraymond99" className="text-primary hover:text-primary-glow transition-colors duration-300">
                        @justraymond99
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300 group">
                    <Linkedin className="w-6 h-6 text-primary group-hover:animate-glow" />
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <a href="https://linkedin.com/in/raymond-sekyere" className="text-primary hover:text-primary-glow transition-colors duration-300">
                        /in/raymond-sekyere
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button variant="keyblade" size="lg" className="w-full group">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gradient-card border-border/30 hover:border-secondary/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send a <span className="text-secondary">Message</span>
                </h3>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        className="bg-muted/30 border-border/30 focus:border-primary/60 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-muted/30 border-border/30 focus:border-primary/60 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input 
                      placeholder="Subject" 
                      className="bg-muted/30 border-border/30 focus:border-primary/60 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Tell me about your project or just say hello! ✨" 
                      rows={6}
                      className="bg-muted/30 border-border/30 focus:border-primary/60 transition-colors duration-300 resize-none"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full group">
                    <Send className="w-5 h-5 group-hover:animate-pulse" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground">
                          ✨ May your code be your guiding light ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;