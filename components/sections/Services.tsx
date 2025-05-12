"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code,
  Layout,
  LineChart,
  Share2,
  Search,
  MessageSquare,
  PenTool,
  X,
  ArrowDown,
  Code2,
  Smartphone
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

interface Service {
  AnimatedIcon: React.FC;
  icon: any;
  title: string;
  description: string;
  longDescription: string;
  pricing: {
    basic: {
      price: string;
      name: string;
      includes: string[];
    };
    standard: {
      price: string;
      name: string;
      includes: string[];
    };
    premium: {
      price: string;
      name: string;
      includes: string[];
    };
  };
  features: string[];
  images: string[];
}

const WebDevAnimation = () => (
  <motion.div className="relative h-48 w-full bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 0, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Code2 className="w-24 h-24 text-custom-blue" />
    </motion.div>
  </motion.div>
);

const MarketingAnimation = () => (
  <motion.div className="relative h-48 w-full bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Share2 className="w-24 h-24 text-custom-blue" />
    </motion.div>
  </motion.div>
);

const iOSAppAnimation = () => (
  <motion.div className="relative h-48 w-full bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
    <motion.div
      animate={{
        y: [-5, 5, -5],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Smartphone className="w-24 h-24 text-custom-blue" />
    </motion.div>
  </motion.div>
);

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { t } = useLanguage();

  const services: Service[] = [
    {
      AnimatedIcon: WebDevAnimation,
      icon: Code2,
      title: t('service1Title'),
      description: t('service1Desc'),
      longDescription: t('service1LongDesc'),
      pricing: {
        basic: {
          price: t('service1PriceBasic'),
          name: t('service1NameBasic'),
          includes: t('service1IncludesBasic').split('|')
        },
        standard: {
          price: t('service1PriceStandard'),
          name: t('service1NameStandard'),
          includes: t('service1IncludesStandard').split('|')
        },
        premium: {
          price: t('service1PricePremium'),
          name: t('service1NamePremium'),
          includes: t('service1IncludesPremium').split('|')
        }
      },
      features: t('service1Features').split('|'),
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    {
      AnimatedIcon: MarketingAnimation,
      icon: Share2,
      title: t('service2Title'),
      description: t('service2Desc'),
      longDescription: t('service2LongDesc'),
      pricing: {
        basic: {
          price: t('service2PriceBasic'),
          name: t('service2NameBasic'),
          includes: t('service2IncludesBasic').split('|')
        },
        standard: {
          price: t('service2PriceStandard'),
          name: t('service2NameStandard'),
          includes: t('service2IncludesStandard').split('|')
        },
        premium: {
          price: t('service2PricePremium'),
          name: t('service2NamePremium'),
          includes: t('service2IncludesPremium').split('|')
        }
      },
      features: t('service2Features').split('|'),
      images: [
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    {
      AnimatedIcon: iOSAppAnimation,
      icon: Smartphone,
      title: t('service3Title'),
      description: t('service3Desc'),
      longDescription: t('service3LongDesc'),
      pricing: {
        basic: {
          price: t('service3PriceBasic'),
          name: t('service3NameBasic'),
          includes: t('service3IncludesBasic').split('|')
        },
        standard: {
          price: t('service3PriceStandard'),
          name: t('service3NameStandard'),
          includes: t('service3IncludesStandard').split('|')
        },
        premium: {
          price: t('service3PricePremium'),
          name: t('service3NamePremium'),
          includes: t('service3IncludesPremium').split('|')
        }
      },
      features: t('service3Features').split('|'),
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div 
          className="absolute inset-0 bg-muted/30"
          style={{
            clipPath: "polygon(0% 45%, 100% 25%, 100% 100%, 0% 100%)"
          }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10 py-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">{t('servicesTitle')}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="group h-full hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-white border-none"
                onClick={() => setSelectedService(service)}
              >
                <service.AnimatedIcon />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-custom-blue">{service.title}</h3>
                  <p className="text-gray-500 text-lg">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
          const portfolioSection = document.getElementById('portfolio');
          if (portfolioSection) {
            portfolioSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }}
      >
        
          <ArrowDown className="w-6 h-6 text-custom-blue" />
        
      </motion.div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)} >
        <DialogContent className="max-w-[95vw] md:max-w-[80vw] max-h-[90vh] md:max-h-[80vh] p-0 border-none rounded-lg">
          <DialogTitle className="sr-only text-custom-blue text-2xl">
            {selectedService?.title} {t('serviceDetails')}
          </DialogTitle>
          <ScrollArea className="h-[90vh] md:h-[80vh] bg-white rounded-lg">
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3 md:gap-4">
                  {selectedService?.icon && (
                    <selectedService.icon className="w-6 h-6 md:w-8 md:h-8 text-custom-blue" />
                  )}
                  <h2 className="text-2xl md:text-4xl text-custom-blue">{selectedService?.title}</h2>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-lg md:text-xl  mb-2 md:mb-3 text-custom-blue/80">{t('overview')}</h3>
                  <p className="text-gray-500 text-sm md:text-base">{selectedService?.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl mb-2 md:mb-3 text-custom-blue/80">{t('keyFeatures')}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService?.features.map((feature, index) => (
                      <li key={index} className="text-gray-500 text-sm md:text-base flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl mb-2 md:mb-3 text-custom-blue/80">{t('pricing')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedService?.pricing && Object.entries(selectedService.pricing).map(([tier, details]) => (
                      <div key={tier} className="bg-gray-100 p-4 md:p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="text-center mb-3 md:mb-4">
                          <h4 className="font-semibold text-custom-blue capitalize mb-1 md:mb-2">{details.name}</h4>
                          <p className="text-xl md:text-2xl text-custom-blue">{details.price}</p>
                        </div>
                        <ul className="space-y-2">
                          {details.includes.map((item, index) => (
                            <li key={index} className="text-gray-500 text-sm md:text-base flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center pt-4 md:pt-6">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
                    <Button
                      size="lg"
                      className="w-full md:w-auto"
                      onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {t('contactButton')}
                    </Button>
                    <Button
                      size="lg"
                      className="w-full md:w-auto"
                      onClick={() => {
                        setSelectedService(null);
                        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {t('viewWorks')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}