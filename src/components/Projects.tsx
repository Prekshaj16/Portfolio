
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Palette, Zap } from 'lucide-react';
const image = "/Recipe.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
      icon: Code
    },
    {
      title: "Design System",
      description: "A comprehensive design system and component library built with React and Storybook. Used across multiple products to ensure consistency and speed up development.",
      image: "/placeholder.svg",
      tags: ["React", "Storybook", "TypeScript", "CSS-in-JS"],
      github: "#",
      live: "#",
      icon: Code
    },
    {
      title: "Recipe Recommendation System",
      description: "A dynamic recipe recommendation system that displays multiple recipe videos and allows seamless playback for an interactive cooking experience.",
      
      tags: ["React.js", "Tailwind CSS", "API"],
      github: "https://github.com/Prekshaj16/RecipeApp_react.js",
      image : <img 
      src = {image} />,
      live: "https://recipe-app-react-js-fawn.vercel.app/",
      icon: Code 
    }
  ]

  const handleLinkClick = (url: string) => {
    if (url && url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            A showcase of some of my recent work, demonstrating different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-blue-500/50 transition-all duration-300 glow-hover group"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <project.icon size={48} className="text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-accent rounded-full text-xs font-medium border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-border hover:border-blue-500"
                    onClick={() => handleLinkClick(project.github)}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={() => handleLinkClick(project.live)}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-border hover:border-blue-500 px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
