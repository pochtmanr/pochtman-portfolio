"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle, XCircle } from "lucide-react";
import confetti from 'canvas-confetti';
import { useLanguage } from '@/lib/LanguageContext';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState<'success' | 'error' | null>(null);
  const { t } = useLanguage();

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

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        toast.success(t('messageSent'));
        e.currentTarget.reset();
        setShowDialog('success');
        triggerConfetti();
      } else {
        setShowDialog('error');
        toast.error(result.error || t('messageFailed'));
      }
    } catch (error) {
      console.error('Error:', error);
      setShowDialog('error');
      toast.error(t('errorOccurred'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10 py-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contactTitle')}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card className="p-6 border-none shadow-xl">
              <h3 className="text-xl font-semibold mb-6">{t('contactInfo')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <a href="mailto:rpochtman@gmail.com" className="text-gray-500 hover:text-primary transition-colors">rpochtman@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <a href="tel:+4917672198625" className="text-gray-500 hover:text-primary transition-colors">+49 176 721 98 625 ({t('german')})</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-gray-500">Dortmund, {t('germany')}</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">{t('socialMedia')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 mr-3 text-primary" />
                    <a href="https://www.linkedin.com/in/romanpochtman" className="text-gray-500 hover:text-primary transition-colors">LinkedIn</a>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-5 h-5 mr-3 text-primary" />
                    <a href="https://github.com/pochtmanr" className="text-gray-500 hover:text-primary transition-colors">GitHub</a>
                  </div>
                  <div className="flex items-center">
                    <Twitter className="w-5 h-5 mr-3 text-primary" />
                    <a href="https://x.com/RPochtman" className="text-gray-500 hover:text-primary transition-colors">{t('twitter')}</a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 border-none shadow-xl">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Input 
                    name="name"
                    placeholder={t('yourName')}
                    className="bg-white text-gray-900 placeholder:text-gray-500 border-gray-300"
                    required
                  />
                </div>
                <div>
                  <Input 
                    name="email"
                    type="email"
                    placeholder={t('yourEmail')}
                    className="bg-white text-gray-900 placeholder:text-gray-500 border-gray-300"
                    required
                  />
                </div>
                <div>
                  <Input 
                    name="subject"
                    placeholder={t('subject')}
                    className="bg-white text-gray-900 placeholder:text-gray-500 border-gray-300"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('yourMessage')}
                    className="min-h-[120px] bg-white text-gray-900 placeholder:text-gray-500 border-gray-300"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-custom-blue text-white hover:bg-custom-blue/80"
                >
                  {isLoading ? t('sending') : t('sendMessage')}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-4 left-0 right-0 text-center text-custom-blue/60 text-sm">
        <p>
          {t('footerText')}
        </p>
      </div>

      <Dialog open={!!showDialog} onOpenChange={() => setShowDialog(null)}>
        <DialogContent className="sm:max-w-md">
          <AnimatePresence>
            {showDialog === 'success' && (
              <motion.div
                className="text-center p-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h2 className="text-2xl font-bold text-custom-blue mb-2">{t('thankYou')} 🎉</h2>
                <p className="text-custom-blue/80 mb-6">
                  {t('appreciateMessage')}
                </p>
                <Button
                  onClick={() => setShowDialog(null)}
                  className="bg-custom-blue text-white hover:bg-custom-blue/80"
                >
                  {t('close')}
                </Button>
              </motion.div>
            )}

            {showDialog === 'error' && (
              <motion.div
                className="text-center p-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <motion.div
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                </motion.div>
                <h2 className="text-2xl font-bold text-red-600 mb-2">{t('oops')} 😕</h2>
                <p className="text-gray-600 mb-6">
                  {t('errorMessage')}
                </p>
                <Button
                  onClick={() => setShowDialog(null)}
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  {t('close')}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}