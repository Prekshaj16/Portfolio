import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-glow font-medium">Preksha Jain</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">  &quot;Merging Web Tech &amp; AI for Next-  Gen Development&quot;

 I am a Full Stack Developer and AI/ML Enthusiast, creating scalable, intelligent applications that blend innovation with efficiency. I craft smart solutions that automate processes and enhance decision-making. 🚀</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={() => scrollToSection('#projects')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg glow-hover">
              View My Work
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('#contact')} className="border-border hover:bg-accent px-8 py-3 rounded-lg">
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[{
            icon: Github,
            href: '#',
            label: 'GitHub'
          }, {
            icon: Linkedin,
            href: '#',
            label: 'LinkedIn'
          }, {
            icon: Mail,
            href: '#contact',
            label: 'Email'
          }].map(social => <a key={social.label} href={social.href} className="p-3 rounded-full border border-border hover:border-blue-500 transition-all duration-300 glow-hover group">
                <social.icon size={24} className="group-hover:text-blue-400 transition-colors" />
              </a>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;