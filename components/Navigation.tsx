"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
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

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
    <>
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
              onClick={() => setIsOpen(true)}
              whileTap={{ scale: 0.9 }}
            >
              <Menu />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu - Moved outside the nav component */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 h-screen bg-white/60 backdrop-blur-xl z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-5 text-foreground text-xl font-medium hover:text-custom-blue transition-colors"
                  whileHover={{ scale: 1.05, x: 5 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Language Selector - Mobile */}
              <div className="mt-8 border-t border-foreground/10 pt-6 w-48 flex flex-col items-center">
                <p className="text-foreground/60 text-sm mb-4">Language</p>
                {languages.map(lang => (
                  <motion.button
                    key={lang.code}
                    className={`block py-3 w-full text-center ${
                      language === lang.code ? 'text-custom-blue font-medium' : 'text-foreground/80'
                    }`}
                    whileHover={{ scale: 1.05, x: 5 }}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.name}
                  </motion.button>
                ))}
              </div>
              
              {/* Close button */}
              <motion.button
                className="absolute top-6 right-6 text-foreground"
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={30} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;