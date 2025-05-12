"use client";

import { motion } from 'framer-motion';
import { ArrowDown, BarChart, Code, Facebook, Globe, Laptop, Rocket, Palette, Server, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChartContainer } from '../ui/chart';
import { useLanguage } from '@/lib/LanguageContext';

// Updated component for animated icons
const FloatingIcon = ({ icon: Icon, className }: { icon: any, className: string }) => {
  return (
    <motion.div
      className={`absolute opacity-20 ${className}`}
      animate={{
        y: ["0%", "100%", "0%"],
        x: ["0%", "50%", "0%"],
        rotate: [0, 360],
      }}
      transition={{
        duration: Math.random() * 10 + 20, // Random duration between 20-30s
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Icon size={100} strokeWidth={1} />
    </motion.div>
  );
};

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Add diagonal background split */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Upper white section */}
        <div className="absolute inset-0 bg-white" />
        {/* Lower blue section with diagonal cut */}
        <div 
          className="absolute inset-0 bg-muted/30"
          style={{
            clipPath: "polygon(0% 45%, 100% 25%, 100% 100%, 0% 100%)"
          }}
        />
      </div>

      {/* Background icons - moved below the split sections */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcon icon={Code} className="text-custom-blue -top-30 -left-17" />
        <FloatingIcon icon={Globe} className="text-custom-blue top-40 right-10" />
        <FloatingIcon icon={Laptop} className="text-custom-blue bottom-20 left-40" />
        <FloatingIcon icon={Palette} className="text-custom-blue -bottom-20 right-40" />
        
        
        <FloatingIcon icon={Facebook} className="text-custom-blue bottom-30 right-1/3" />
        <FloatingIcon icon={Instagram} className="text-custom-blue bottom-1/3 right-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p
            className="text- md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t('heroSubtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="mr-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('contactButton')}
            </Button>
            <Button
              
              className="bg-white text-custom-blue hover:bg-custom-blue hover:text-white"
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('heroButton')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}