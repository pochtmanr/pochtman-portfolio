"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart, BarChart2, Code2, Rocket, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={fadeInVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-custom-blue"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div variants={rightVariants} className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-custom-yellow/30 animate-pulse"></div>
              <Image
                src="/assets/images/IMG_5440.jpg"
                alt="Professional headshot"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-custom-blue shadow-lg"
                width={300}
                height={300}
              />
            </div>
          </motion.div>
          <motion.div variants={leftVariants} className="space-y-6">
            <p className="text-lg text-gray-500">
              Hi, I'm Roman Pochtman, a passionate Web Developer and Marketing Manager based in <a href="https://www.google.com/maps/place/Dortmund,+Germany" target="_blank" rel="noopener noreferrer" className="text-custom-blue">Dortmund, Germany</a>. I specialize in providing web development, targeted advertising, and data analytics solutions for small businesses.
            </p>
            <p className="text-lg text-gray-500">
              With a solid background in technology and business, I bring a unique blend of technical expertise and creative problem-solving. My mission is to help small businesses achieve their goals by delivering personalized, efficient, and results-driven solutions.
            </p>
          </motion.div>

          
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeInVariants}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Code2 className="w-12 h-12 mb-4 text-custom-blue" />
            <h3 className="text-xl font-semibold mb-2 text-custom-blue">Web Development</h3>
            <p className="text-gray-500">
              Experienced in building <span className="cursor-pointer text-custom-blue" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>responsive and user-friendly websites</span> using modern technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <BarChart className="w-12 h-12 mb-4 text-custom-blue" />
            <h3 className="text-xl font-semibold mb-2 text-custom-blue">Digital Marketing</h3>
            <p className="text-gray-500">
              Leveraging 1.5 years of marketing experience combined with <a href="https://coursera.org/share/8cf3680c027a6108a46658ced95deb0a" target="_blank" rel="noopener noreferrer" className="text-custom-blue">Google Data Analytics </a> and Meta Blueprint certifications to deliver data-driven marketing strategies and measurable results.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Users className="w-12 h-12 mb-4 text-custom-blue" />
            <h3 className="text-xl font-semibold mb-2 text-custom-blue">Client Focus</h3>
            <p className="text-gray-500">
              Building lasting relationships through clear communication and exceptional service.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}