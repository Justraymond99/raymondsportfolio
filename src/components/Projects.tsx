import ProjectCard from "./ProjectCard";


const Projects = () => {
  const projects = [
    {
      title: "FINAL FORM",
      role: "LEAD Developer",
      description: "A comprehensive system for tracking and managing magical keyblades across different worlds, built with real-time updates and multi-dimensional data synchronization.",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "AWS"],
      imageUrl: "/placeholder.svg",
      liveUrl: "https://keyblade-system.demo",
      githubUrl: "https://github.com/username/keyblade-system",
      contribution: "Designed and implemented the entire architecture, created the real-time synchronization system, and built responsive UI components with modern design."
    },
    {
      title: "Ensemble",
      role: "Lead Developer",
      description: "Ensemble uses AI for outfit detection, community rankings, and affiliate e-commerce integration. Users can explore looks, share fit pics, generate affiliate links, and climb the leaderboard through gamified fashion engagement. Ensemble blends tech, style, and community into one seamless experience.",
      techStack: ["Vue.js", "Express.js", "PostgreSQL", "Redis", "Docker"],
      imageUrl: "/placeholder.svg",
              liveUrl: "https://network-demo.com",
        githubUrl: "https://github.com/username/network",
      contribution: "Led the frontend development team, implemented the messaging system, and created the world-navigation interface with smooth animations and magical transitions."
    },
    {
      title: "ARchitect",
      role: "Lead Developer",
      description: "A futuristic platform for augmented reality home design and interior planning. Users can visualize and customize spaces using 3D elements, drag-and-drop furniture, and AI-generated layout suggestions. Designed for mobile and web, ARchitect combines AI, AR, and 3D rendering to bring floorplans and spatial creativity to life.",
      techStack: ["Three.js", "React", "WebGL", "Python", "FastAPI"],
      imageUrl: "/placeholder.svg",
      liveUrl: "https://gummi-builder.demo",
      githubUrl: "https://github.com/username/gummi-builder",
      contribution: "Built the entire application from scratch, implemented 3D rendering engine, created physics simulation system, and designed intuitive drag-and-drop interface."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-10 left-10 text-accent/10 w-12 h-12 animate-float">✨</span>
        <span className="absolute bottom-20 right-20 text-primary/10 w-8 h-8 animate-sparkle">⚡</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Project <span className="text-primary">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Magical experiences crafted with code, connecting users across digital realms
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-300 font-medium"
          >
            View All Projects on GitHub
            <span className="w-4 h-4 animate-glow">⚡</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;