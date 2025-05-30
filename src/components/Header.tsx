
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <div className=" rounded-lg flex items-center justify-center">
  <img 
    src="/logo.png" 
    alt="Logo" 
    className="h-20 w-auto rounded-lg"
  />
</div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-foreground/80 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 hover:text-glow"
              >
                <item.icon className="text-xl text-foreground/80 hover:text-glow" />
                <span className="text-lg font-semibold">{item.name}</span>
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 w-full py-2 text-foreground/80 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
