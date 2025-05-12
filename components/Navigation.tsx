"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

// Language context will be added later
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('portfolio'), href: '#portfolio' },
    { name: t('contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ru', name: 'Русский' }
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setShowLanguages(false);
    // We'll integrate with a language context later
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/10 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center relative">
          <motion.a
            href="#"
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Language Selector - Desktop */}
          <div className="hidden md:block absolute right-0">
            <div className="relative">
              <motion.button
                className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setShowLanguages(!showLanguages)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Globe size={18} />
                <span>{languages.find(lang => lang.code === language)?.name}</span>
              </motion.button>
              
              {showLanguages && (
                <motion.div 
                  className="absolute right-0 mt-2 py-2 w-40 bg-white shadow-lg rounded-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {languages.map(langOption => (
                    <button
                      key={langOption.code}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        language === langOption.code ? 'text-custom-blue font-medium' : 'text-gray-700'
                      }`}
                      onClick={() => handleLanguageChange(langOption.code)}
                    >
                      {langOption.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Navigation Button - Move to absolute positioning */}
          <motion.button
            className="md:hidden absolute right-0"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-custom-blue/95 backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-4 text-white/80 hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Language Selector - Mobile */}
              <div className="py-4 border-t border-white/20 mt-4">
                <p className="text-white/60 text-sm mb-2">Language</p>
                {languages.map(lang => (
                  <motion.button
                    key={lang.code}
                    className={`block py-2 w-full text-left ${
                      language === lang.code ? 'text-white font-medium' : 'text-white/80'
                    }`}
                    whileHover={{ x: 4 }}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;