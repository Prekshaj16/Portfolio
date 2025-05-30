import { Card } from '@/components/ui/card';
import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react';
const image = "/Preksha.png";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, user-friendly solutions"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and great UX"
    },
    {
      icon: Coffee,
      title: "Collaboration",
      description: "Working seamlessly with teams "
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            
            {/* Round Profile Image */}
            <img
              src={image} 
              alt="My Photo"
              className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />

            <p className="text-lg text-foreground/80 leading-relaxed ">
              I'm a passionate Full-stack developer eager to create impactful digital experiences. My journey began with a deep curiosity about how websites work, which has grown into a strong dedication to crafting beautiful and functional applications. 
              As a fresher, I'm constantly learning, refining my skills, and exploring new technologies to build user-friendly solutions.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed ">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects. Continuous learning drives my passion for building intuitive, responsive applications.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['React.js', 'MongoDB', 'Node.js', 'Python', 'Java'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-accent rounded-full text-sm font-medium border border-border hover:border-blue-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-blue-500/50 transition-all duration-300 glow-hover group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
                    <Icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-foreground/70 text-sm">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
