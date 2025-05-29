
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-blue-500/50 transition-all duration-300 glow-hover"
            >
              <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-accent"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">Technologies I work with daily</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 
              'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Git', 'Jest'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full text-sm font-medium border border-border hover:border-blue-500/50 transition-all glow-hover"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
