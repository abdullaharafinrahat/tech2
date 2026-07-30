import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0 group -ml-2 sm:-ml-1 lg:ml-0">
          <img 
            src="https://res.cloudinary.com/drufv7gh5/image/upload/v1785441323/favicon_oinq17.png" 
            alt="NexTechZen Logo"
            className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-contain"
          />
          <span className={`font-heading font-bold text-lg tracking-wide hidden sm:block text-gray-900 -ml-5 sm:-ml-6`}>
            NexTech<span className="text-gray-900">Zen</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden xl:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-black transition-all duration-300 shadow-lg hover:scale-105"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`xl:hidden p-2 text-gray-900`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="xl:hidden absolute top-full left-0 right-0 glass border-t border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-base font-medium transition-colors ${
                location.pathname === link.href ? 'text-gray-900 underline underline-offset-4' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 mt-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-black transition-all duration-300 shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Free Quote
          </Link>
        </motion.div>
      )}
    </header>
  );
}
