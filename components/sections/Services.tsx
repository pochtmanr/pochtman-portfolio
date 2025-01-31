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
  Code2
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      AnimatedIcon: WebDevAnimation,
      icon: Code2,
      title: "Website Development",
      description: "Custom websites built with modern frameworks and responsive design principles.",
      longDescription: "From simple landing pages to complex e-commerce solutions, I create custom websites that are fast, responsive, and user-friendly. Using modern frameworks like React and Next.js, I ensure your website is built with the latest technology and best practices. Each project includes responsive design, SEO optimization, and performance tuning.",
      pricing: {
        basic: {
          price: "500€",
          name: "Landing Page",
          includes: [
            "Single Page Design",
            "Mobile Responsive",
            "Basic SEO Setup",
            "Contact Form",
            "5 Content Sections"
          ]
        },
        standard: {
          price: "1,000€",
          name: "Multi-page Website",
          includes: [
            "Up to 5 Pages",
            "Custom Design",
            "Advanced SEO",
            "Blog Setup",
            "Social Media Integration",
            "Analytics Setup"
          ]
        },
        premium: {
          price: "2,000€",
          name: "E-commerce Solution",
          includes: [
            "Full E-commerce Setup",
            "Product Management",
            "Payment Integration",
            "Custom Features",
            "Premium Support",
            "Marketing Integration"
          ]
        }
      },
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "Modern Frameworks (React, Next.js)",
        "Custom Functionality",
        "Content Management System"
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    {
      AnimatedIcon: MarketingAnimation,
      icon: Share2,
      title: "Social Media Marketing",
      description: "Comprehensive digital marketing solutions including social media, Google Ads, and analytics.",
      longDescription: "A complete digital marketing package that combines social media management, paid advertising, and performance tracking. Services include campaign management across Meta platforms and Google Ads, detailed analytics reporting, and strategic optimization to maximize your ROI.",
      pricing: {
        basic: {
          price: "300€ /month",
          name: "Basic Package",
          includes: [
            "Meta Platforms Management",
            "Basic Google Ads Setup",
            "Monthly Analytics Report",
            "Basic Content Creation",
            "Community Management"
          ]
        },
        standard: {
          price: "800€ /month",
          name: "Standard Package",
          includes: [
            "Advanced Meta Management",
            "Full Google Ads Management",
            "Weekly Analytics Reports",
            "Regular Content Creation",
            "Community Management",
          ]
        },
        premium: {
          price: "1,500€ /month",
          name: "Premium Package",
          includes: [
            "Premium Meta & Google Management",
            "Advanced Analytics & Reporting",
            "Daily Content Creation",
            "Priority Support",
            "Strategy Development",
            "ROI Optimization"
          ]
        }
      },
      features: [
        "Meta Platforms Management",
        "Google Ads Campaigns",
        "Analytics & Reporting",
        "Content Creation",
        "Community Management",
        "Performance Optimization"
      ],
      images: [
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-blue">My Services</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Comprehensive web development and digital marketing solutions tailored to help your business grow
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
            {selectedService?.title} Service Details
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
                  <h3 className="text-lg md:text-xl  mb-2 md:mb-3 text-custom-blue/80">Overview</h3>
                  <p className="text-gray-500 text-sm md:text-base">{selectedService?.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl mb-2 md:mb-3 text-custom-blue/80">Key Features</h3>
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
                  <h3 className="text-lg md:text-xl mb-2 md:mb-3 text-custom-blue/80">Pricing</h3>
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
                      Contact Me
                    </Button>
                    <Button
                      size="lg"
                      className="w-full md:w-auto"
                      onClick={() => {
                        setSelectedService(null);
                        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      View Works
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