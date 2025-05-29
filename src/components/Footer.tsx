
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            DevPortfolio
          </button>
          
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full border border-border hover:border-blue-500 transition-all duration-300 glow-hover group"
                aria-label={social.label}
              >
                <social.icon size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="text-center text-foreground/70">
            <p className="flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by Alex Developer</span>
            </p>
            <p className="text-sm mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
