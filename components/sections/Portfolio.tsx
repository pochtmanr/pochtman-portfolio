"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFirebase, 
  SiNodedotjs, 
  SiReact,
  SiSwift,
  SiOpenai
} from 'react-icons/si'; 

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link: string;
  screenshots: {
    title: string;
    image: string;
    description: string;
  }[];
  technologies: {
    name: string;
    icon: React.ElementType;
    color: string;
  }[];
  features?: string[];
}

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, language, getProjectTranslation } = useLanguage();

  // Project data with technology icons
  const projectTechnologies = {
    growMates: [
      {
        name: "React",
        icon: SiReact,
        color: "hover:text-blue-400"
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "hover:text-blue-500"
      },
      {
        name: "Swift",
        icon: SiSwift,
        color: "hover:text-orange-500"
      },
      {
        name: "OpenAI",
        icon: SiOpenai,
        color: "hover:text-green-500"
      }
    ],
    templateWorks: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "hover:text-black"
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "hover:text-blue-500"
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "hover:text-cyan-400"
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "hover:text-orange-500"
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "hover:text-green-500"
      }
    ]
  };

  // Construct projects with translations
  const projects: Project[] = [
    (() => {
      const growMatesTranslation = getProjectTranslation('growMates');
      return {
        title: growMatesTranslation.title,
        description: growMatesTranslation.description,
        longDescription: growMatesTranslation.longDescription,
        image: "/assets/images/projects/GrowMates/Main.png",
        tags: growMatesTranslation.tags,
        link: "https://growmates-chi.vercel.app/ai-adviser",
        screenshots: growMatesTranslation.screenshots.map((screenshot: any, index: number) => ({
          title: screenshot.title,
          description: screenshot.description,
          image: [
            "/assets/images/projects/GrowMates/Dash.png",
            "/assets/images/projects/GrowMates/Recommendations.png",
            "/assets/images/projects/GrowMates/Callendar.png",
            "/assets/images/projects/GrowMates/IOS.PNG"
          ][index]
        })),
        technologies: projectTechnologies.growMates,
        features: growMatesTranslation.features
      };
    })(),
    (() => {
      const templateWorksTranslation = getProjectTranslation('templateWorks');
      return {
        title: templateWorksTranslation.title,
        description: templateWorksTranslation.description,
        longDescription: templateWorksTranslation.longDescription,
        image: "/assets/images/projects/Templateworks/Main.png",
        tags: templateWorksTranslation.tags,
        link: "https://templateworks.online",
        screenshots: templateWorksTranslation.screenshots.map((screenshot: any, index: number) => ({
          title: screenshot.title,
          description: screenshot.description,
          image: [
            "/assets/images/projects/Templateworks/CaseResolution.png",
            "/assets/images/projects/Templateworks/Templates.png"
          ][index]
        })),
        technologies: projectTechnologies.templateWorks,
        features: templateWorksTranslation.features
      };
    })()
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
    <section id="portfolio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with diagonal split */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Upper white section */}
        <div className="absolute inset-0 bg-white" />
        {/* Lower blue section with diagonal cut */}
        <div 
          className="absolute inset-0 bg-muted/30"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 45%)"
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">{t('recentWorks')}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('recentWorksDescription')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="group h-full hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-white border-none"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-custom-blue group-hover:text-custom-blue/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 group-hover:text-gray-900 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-custom-blue/10 text-custom-blue px-3 py-1 rounded-full text-sm group-hover:bg-custom-blue/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full bg-custom-blue text-white group-hover:bg-custom-blue/80 group-hover:text-white transition-all duration-300"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    {t('viewProject')} <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-[80vw] max-h-[90vh] md:max-h-[80vh] p-0 border-none rounded-lg">
          <DialogTitle className="sr-only">
            {selectedProject?.title} Details
          </DialogTitle>
          <ScrollArea className="h-[90vh] md:h-[80vh] bg-white rounded-lg">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-4xl text-custom-blue">{selectedProject?.title}</h2> 
                
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl mb-3 text-custom-blue/80">{t('overview')}</h3>
                  <p className="text-gray-700 mb-6">{selectedProject?.longDescription}</p>
                  
                  <h4 className="text-2xl mb-4 text-custom-blue/80">{t('technologiesUsed')}</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject?.technologies.map((tech, index) => {
                      const Icon = tech.icon;
                      return (
                        <div 
                          key={index}
                          className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <Icon 
                            className={`w-6 h-6 transition-colors ${tech.color}`}
                          />
                          <span className="text-gray-700">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl mb-3 text-custom-blue/80">{t('features')}</h3>
                  <div className="grid gap-8">
                    {selectedProject?.screenshots.map((screenshot, index) => (
                      <div key={index} className="space-y-4">
                        <h4 className="text-xl text-gray-700">{screenshot.title}</h4>
                        <div className="relative h-[200px] md:h-[500px] overflow-hidden rounded-lg">
                          <img
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-gray-700">{screenshot.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button
                    size="lg"
                    onClick={() => window.open(selectedProject?.link, '_blank')}
                  >
                    {t('visitWebsite')} <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}