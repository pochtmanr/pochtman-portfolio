"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define translation type structure
type ProjectTranslation = {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  screenshots: {
    title: string;
    description: string;
  }[];
  features: string[];
};

type TranslationType = {
  [key: string]: {
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    heroTitle: string;
    heroSubtitle: string;
    heroButton: string;
    recentWorks: string;
    recentWorksDescription: string;
    viewProject: string;
    overview: string;
    technologiesUsed: string;
    features: string;
    visitWebsite: string;
    growMates: ProjectTranslation;
    templateWorks: ProjectTranslation;
    contactButton: string;
    aboutTitle: string;
    aboutDesc1: string;
    aboutDesc2: string;
    aboutBox1Title: string;
    aboutBox1Desc: string;
    aboutBox2Title: string;
    aboutBox2Desc: string;
    aboutBox3Title: string;
    aboutBox3Desc: string;
    servicesTitle: string;
    servicesSubtitle: string;
    service1Title: string;
    service1Desc: string;
    service1LongDesc: string;
    service1PriceBasic: string;
    service1NameBasic: string;
    service1IncludesBasic: string;
    service1PriceStandard: string;
    service1NameStandard: string;
    service1IncludesStandard: string;
    service1PricePremium: string;
    service1NamePremium: string;
    service1IncludesPremium: string;
    service1Features: string;
    service2Title: string;
    service2Desc: string;
    service2LongDesc: string;
    service2PriceBasic: string;
    service2NameBasic: string;
    service2IncludesBasic: string;
    service2PriceStandard: string;
    service2NameStandard: string;
    service2IncludesStandard: string;
    service2PricePremium: string;
    service2NamePremium: string;
    service2IncludesPremium: string;
    service2Features: string;
    service3Title: string;
    service3Desc: string;
    service3LongDesc: string;
    service3PriceBasic: string;
    service3NameBasic: string;
    service3IncludesBasic: string;
    service3PriceStandard: string;
    service3NameStandard: string;
    service3IncludesStandard: string;
    service3PricePremium: string;
    service3NamePremium: string;
    service3IncludesPremium: string;
    service3Features: string;
    serviceDetails: string;
    keyFeatures: string;
    pricing: string;
    viewWorks: string;
    contactTitle: string;
    contactSubtitle: string;
    contactInfo: string;
    german: string;
    germany: string;
    socialMedia: string;
    twitter: string;
    yourName: string;
    yourEmail: string;
    subject: string;
    yourMessage: string;
    sending: string;
    sendMessage: string;
    footerText: string;
    thankYou: string;
    appreciateMessage: string;
    close: string;
    oops: string;
    errorMessage: string;
    messageSent: string;
    messageFailed: string;
    errorOccurred: string;
    [key: string]: any; // Allow additional keys
  }
};

// Define all translations
const translations: TranslationType = {
  en: {
    // Navigation
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    
    // Hero section
    heroTitle: 'Web Developer & Digital Marketing Expert',
    heroSubtitle: 'Crafting innovative digital solutions that empower small businesses to thrive',
    heroButton: 'View My Works',
    contactButton: 'Get in Touch',
    
    // About section
    aboutTitle: 'About Me',
    aboutDesc1: "Hi, I'm Roman Pochtman, a passionate Web Developer and Marketing Manager based in <a href=\"https://www.google.com/maps/place/Dortmund,+Germany\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-custom-blue\">Dortmund, Germany</a>. I specialize in providing web development, targeted advertising, and data analytics solutions for small businesses.",
    aboutDesc2: "With a solid background in technology and business, I bring a unique blend of technical expertise and creative problem-solving. My mission is to help small businesses achieve their goals by delivering personalized, efficient, and results-driven solutions.",
    aboutBox1Title: "Web Development",
    aboutBox1Desc: "Experienced in building <span class=\"cursor-pointer text-custom-blue\" onClick=\"document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })\">responsive and user-friendly websites</span> using modern technologies and best practices.",
    aboutBox2Title: "Digital Marketing",
    aboutBox2Desc: "Leveraging 1.5 years of marketing experience combined with <a href=\"https://coursera.org/share/8cf3680c027a6108a46658ced95deb0a\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-custom-blue\">Google Data Analytics </a> and Meta Blueprint certifications to deliver data-driven marketing strategies and measurable results.",
    aboutBox3Title: "iOS App Development",
    aboutBox3Desc: "Creating native iOS applications with Swift that provide seamless user experiences and integrate with web platforms for comprehensive solutions.",
    
    // Services section
    servicesTitle: "My Services",
    servicesSubtitle: "Comprehensive web development and digital marketing solutions tailored to help your business grow",
    service1Title: "Website Development",
    service1Desc: "Custom websites built with modern frameworks and responsive design principles.",
    service1LongDesc: "From simple landing pages to complex e-commerce solutions, I create custom websites that are fast, responsive, and user-friendly. Using modern frameworks like React and Next.js, I ensure your website is built with the latest technology and best practices. Each project includes responsive design, SEO optimization, and performance tuning.",
    service1PriceBasic: "500€",
    service1NameBasic: "Landing Page",
    service1IncludesBasic: "Single Page Design|Mobile Responsive|Basic SEO Setup|Contact Form|5 Content Sections",
    service1PriceStandard: "1,000€",
    service1NameStandard: "Multi-page Website",
    service1IncludesStandard: "Up to 5 Pages|Custom Design|Advanced SEO|Blog Setup|Social Media Integration|Analytics Setup",
    service1PricePremium: "2,000€",
    service1NamePremium: "E-commerce Solution",
    service1IncludesPremium: "Full E-commerce Setup|Product Management|Payment Integration|Custom Features|Premium Support|Marketing Integration",
    service1Features: "Responsive Design|SEO Optimization|Performance Tuning|Modern Frameworks (React, Next.js)|Custom Functionality|Content Management System",
    
    service2Title: "Social Media Marketing",
    service2Desc: "Comprehensive digital marketing solutions including social media, Google Ads, and analytics.",
    service2LongDesc: "A complete digital marketing package that combines social media management, paid advertising, and performance tracking. Services include campaign management across Meta platforms and Google Ads, detailed analytics reporting, and strategic optimization to maximize your ROI.",
    service2PriceBasic: "300€ /month",
    service2NameBasic: "Basic Package",
    service2IncludesBasic: "Meta Platforms Management|Basic Google Ads Setup|Monthly Analytics Report|Basic Content Creation|Community Management",
    service2PriceStandard: "800€ /month",
    service2NameStandard: "Standard Package",
    service2IncludesStandard: "Advanced Meta Management|Full Google Ads Management|Weekly Analytics Reports|Regular Content Creation|Community Management",
    service2PricePremium: "1,500€ /month",
    service2NamePremium: "Premium Package",
    service2IncludesPremium: "Premium Meta & Google Management|Advanced Analytics & Reporting|Daily Content Creation|Priority Support|Strategy Development|ROI Optimization",
    service2Features: "Meta Platforms Management|Google Ads Campaigns|Analytics & Reporting|Content Creation|Community Management|Performance Optimization",
    
    service3Title: "iOS App Development",
    service3Desc: "Native iOS applications with beautiful UI, seamless UX, and web integration capabilities.",
    service3LongDesc: "Professional iOS app development services focusing on creating native applications that deliver exceptional user experiences. Using Swift and modern iOS frameworks, I develop apps that are optimized for performance, security, and visual appeal. Whether you need a standalone app or a mobile companion to your web platform, I provide tailored solutions that meet your specific business needs.",
    service3PriceBasic: "3,000€",
    service3NameBasic: "Basic App",
    service3IncludesBasic: "Core Functionality|Clean UI Design|Basic User Authentication|2 Key Features|App Store Submission|Bug Fixes for 30 Days",
    service3PriceStandard: "5,000€",
    service3NameStandard: "Standard App",
    service3IncludesStandard: "Enhanced Functionality|Premium UI/UX Design|Advanced User Authentication|Up to 5 Key Features|Web Integration|Analytics Setup|Bug Fixes for 60 Days",
    service3PricePremium: "10,000€+",
    service3NamePremium: "Custom Solution",
    service3IncludesPremium: "Complex Functionality|Premium UI/UX with Animations|Full Backend Integration|Custom Features|API Development|Cloud Services|Advanced Analytics|90 Days Support",
    service3Features: "Native Swift Development|Intuitive User Interface|Seamless User Experience|Web Platform Integration|Push Notifications|Secure Authentication|App Store Optimization|Ongoing Maintenance",
    
    serviceDetails: "Service Details",
    keyFeatures: "Key Features",
    pricing: "Pricing",
    viewWorks: "View Works",
    
    // Contact section
    contactTitle: "Get in Touch",
    contactSubtitle: "Let's discuss how I can help your business grow through web development and digital marketing",
    contactInfo: "Contact Information",
    german: "German",
    germany: "Germany",
    socialMedia: "Social Media",
    twitter: "X (Formerly Twitter)",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    yourMessage: "Your Message",
    sending: "Sending...",
    sendMessage: "Send Message",
    footerText: "Made with love by Roman Pochtman & Claude 3.5 © 2025",
    thankYou: "Thank You!",
    appreciateMessage: "I appreciate you reaching out. I'll get back to you as soon as possible!",
    close: "Close",
    oops: "Oops!",
    errorMessage: "Something went wrong while sending your message. Please try again later.",
    messageSent: "Message sent successfully!",
    messageFailed: "Failed to send message. Please try again.",
    errorOccurred: "An error occurred. Please try again later.",
    
    // Portfolio section
    recentWorks: 'Recent Works',
    recentWorksDescription: 'A selection of my recent web development projects and marketing campaigns',
    viewProject: 'View Project',
    overview: 'Overview',
    technologiesUsed: 'Technologies Used',
    features: 'Features',
    visitWebsite: 'Visit Website',

    // Project specific translations
    growMates: {
      title: 'GrowMates',
      description: 'A platform for plant care and analysis using AI that helps users monitor and maintain their plants with personalized recommendations.',
      longDescription: 'GrowMates is a comprehensive platform designed to help users analyze and care for their plants. The application leverages AI technology to provide personalized plant care recommendations, automated watering schedules, and detailed plant analysis. With both web and mobile interfaces, GrowMates makes plant care accessible and efficient for both beginners and experienced gardeners.',
      tags: ['React', 'TypeScript', 'OpenAI', 'Swift'],
      screenshots: [
        {
          title: 'Dashboard Overview',
          description: 'The comprehensive dashboard provides an overview of all your plants, their health status, and upcoming care tasks in one convenient place.'
        },
        {
          title: 'AI Recommendations',
          description: 'Leveraging the OpenAI API, GrowMates provides personalized plant care recommendations based on species, environmental conditions, and growth patterns.'
        },
        {
          title: 'Care Calendar',
          description: 'The integrated calendar helps users stay on top of watering schedules, fertilization, and other maintenance tasks with timely reminders.'
        },
        {
          title: 'iOS Mobile App',
          description: 'The native iOS companion app built with Swift allows for on-the-go plant monitoring and care management.'
        }
      ],
      features: [
        'AI-Powered Plant Care Recommendations',
        'Automated Watering Schedule',
        'Plant Health Monitoring',
        'Detailed Species Information',
        'iOS Mobile Companion App',
        'Visual Plant Analysis'
      ]
    },
    templateWorks: {
      title: 'TemplateWorks',
      description: 'A web-based tool designed to enhance efficiency in customer support and business communication through automated templates and case resolution management.',
      longDescription: 'TemplateWorks is a web-based tool designed to enhance efficiency in customer support and business communication. It allows users to create and manage chat/email templates and case resolution steps in multiple languages. The platform dynamically adapts templates based on the recipient\'s name and gender, making it particularly useful for languages like Hebrew, where gender-specific grammar is required.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      screenshots: [
        {
          title: 'Case Resolutions',
          description: 'Standardize and streamline issue resolution workflows with step-by-step guides. Teams can create, search, and follow structured resolution processes, ensuring consistent problem-solving across the organization.'
        },
        {
          title: 'Template Management',
          description: 'Create and manage dynamic templates that automatically adapt based on recipient\'s name and gender. Perfect for multi-language support, especially for languages with gender-specific grammar like Hebrew.'
        }
      ],
      features: [
        'Automated Templates with Dynamic Adaptation',
        'Multi-Language Support',
        'Gender-Specific Grammar Handling',
        'Structured Case Resolution Steps',
        'Searchable Knowledge Base',
        'Team Collaboration Tools'
      ]
    }
  },
  de: {
    // Navigation
    about: 'Über mich',
    services: 'Dienstleistungen',
    portfolio: 'Portfolio',
    contact: 'Kontakt',
    
    // Hero section
    heroTitle: 'Web-Entwickler & Digital Marketing Experte',
    heroSubtitle: 'Innovative digitale Lösungen, die kleinen Unternehmen zum Erfolg verhelfen',
    heroButton: 'Meine Arbeiten ansehen',
    contactButton: 'Kontaktieren Sie mich',
    
    // About section
    aboutTitle: 'Über mich',
    aboutDesc1: "Hallo, ich bin Roman Pochtman, ein leidenschaftlicher Webentwickler und Marketing-Manager mit Sitz in <a href=\"https://www.google.com/maps/place/Dortmund,+Germany\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-custom-blue\">Dortmund, Deutschland</a>. Ich bin spezialisiert auf Webentwicklung, zielgerichtete Werbung und Datenanalyselösungen für kleine Unternehmen.",
    aboutDesc2: "Mit einem soliden Hintergrund in Technologie und Wirtschaft bringe ich eine einzigartige Mischung aus technischem Fachwissen und kreativem Problemlösen mit. Meine Mission ist es, kleinen Unternehmen zu helfen, ihre Ziele zu erreichen, indem ich personalisierte, effiziente und ergebnisorientierte Lösungen liefere.",
    aboutBox1Title: "Webentwicklung",
    aboutBox1Desc: "Erfahren in der Erstellung von <span class=\"cursor-pointer text-custom-blue\" onClick=\"document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })\">responsiven und benutzerfreundlichen Websites</span> mit modernen Technologien und bewährten Methoden.",
    aboutBox2Title: "Digitales Marketing",
    aboutBox2Desc: "Ich nutze 1,5 Jahre Marketingerfahrung kombiniert mit <a href=\"https://coursera.org/share/8cf3680c027a6108a46658ced95deb0a\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-custom-blue\">Google Data Analytics</a> und Meta Blueprint-Zertifizierungen, um datengesteuerte Marketingstrategien und messbare Ergebnisse zu liefern.",
    aboutBox3Title: "iOS-App-Entwicklung",
    aboutBox3Desc: "Entwicklung nativer iOS-Anwendungen mit Swift, die nahtlose Benutzererlebnisse bieten und sich in Webplattformen für umfassende Lösungen integrieren lassen.",
    
    // Services section
    servicesTitle: "Meine Dienstleistungen",
    servicesSubtitle: "Umfassende Webentwicklungs- und Digital-Marketing-Lösungen, die auf das Wachstum Ihres Unternehmens zugeschnitten sind",
    service1Title: "Website-Entwicklung",
    service1Desc: "Maßgeschneiderte Websites mit modernen Frameworks und responsivem Design.",
    service1LongDesc: "Von einfachen Landing Pages bis hin zu komplexen E-Commerce-Lösungen erstelle ich maßgeschneiderte Websites, die schnell, responsiv und benutzerfreundlich sind. Mit modernen Frameworks wie React und Next.js stelle ich sicher, dass Ihre Website mit der neuesten Technologie und nach bewährten Methoden erstellt wird. Jedes Projekt umfasst responsives Design, SEO-Optimierung und Performance-Tuning.",
    service1PriceBasic: "500€",
    service1NameBasic: "Landing Page",
    service1IncludesBasic: "Einseitiges Design|Mobilgeräteoptimiert|Grundlegende SEO-Einrichtung|Kontaktformular|5 Inhaltsbereiche",
    service1PriceStandard: "1.000€",
    service1NameStandard: "Mehrseitige Website",
    service1IncludesStandard: "Bis zu 5 Seiten|Individuelles Design|Erweiterte SEO|Blog-Einrichtung|Social-Media-Integration|Analytics-Einrichtung",
    service1PricePremium: "2.000€",
    service1NamePremium: "E-Commerce-Lösung",
    service1IncludesPremium: "Vollständige E-Commerce-Einrichtung|Produktverwaltung|Zahlungsintegration|Benutzerdefinierte Funktionen|Premium-Support|Marketing-Integration",
    service1Features: "Responsives Design|SEO-Optimierung|Performance-Tuning|Moderne Frameworks (React, Next.js)|Benutzerdefinierte Funktionalität|Content-Management-System",
    
    service2Title: "Social-Media-Marketing",
    service2Desc: "Umfassende Digital-Marketing-Lösungen einschließlich Social Media, Google Ads und Analytik.",
    service2LongDesc: "Ein komplettes Digital-Marketing-Paket, das Social-Media-Management, bezahlte Werbung und Leistungsverfolgung kombiniert. Die Dienstleistungen umfassen Kampagnenmanagement über Meta-Plattformen und Google Ads, detaillierte Analytik-Berichte und strategische Optimierung zur Maximierung Ihres ROI.",
    service2PriceBasic: "300€ /Monat",
    service2NameBasic: "Basis-Paket",
    service2IncludesBasic: "Meta-Plattformen-Management|Grundlegende Google Ads-Einrichtung|Monatlicher Analytik-Bericht|Grundlegende Content-Erstellung|Community-Management",
    service2PriceStandard: "800€ /Monat",
    service2NameStandard: "Standard-Paket",
    service2IncludesStandard: "Erweitertes Meta-Management|Vollständiges Google Ads-Management|Wöchentliche Analytik-Berichte|Regelmäßige Content-Erstellung|Community-Management",
    service2PricePremium: "1.500€ /Monat",
    service2NamePremium: "Premium-Paket",
    service2IncludesPremium: "Premium Meta & Google Management|Erweiterte Analytik & Berichterstattung|Tägliche Content-Erstellung|Prioritäts-Support|Strategieentwicklung|ROI-Optimierung",
    service2Features: "Meta-Plattformen-Management|Google Ads-Kampagnen|Analytik & Berichterstattung|Content-Erstellung|Community-Management|Leistungsoptimierung",
    
    service3Title: "iOS-App-Entwicklung",
    service3Desc: "Native iOS-Anwendungen mit schöner Benutzeroberfläche, nahtloser Benutzererfahrung und Webintegrationsfähigkeiten.",
    service3LongDesc: "Professionelle iOS-App-Entwicklungsdienste, die sich auf die Erstellung nativer Anwendungen konzentrieren, die außergewöhnliche Benutzererfahrungen bieten. Mit Swift und modernen iOS-Frameworks entwickle ich Apps, die für Leistung, Sicherheit und visuelle Attraktivität optimiert sind. Ob Sie eine eigenständige App oder eine mobile Begleitung zu Ihrer Webplattform benötigen, ich biete maßgeschneiderte Lösungen, die Ihren spezifischen Geschäftsanforderungen entsprechen.",
    service3PriceBasic: "3.000€",
    service3NameBasic: "Basis-App",
    service3IncludesBasic: "Kernfunktionalität|Übersichtliches UI-Design|Grundlegende Benutzerauthentifizierung|2 Hauptfunktionen|App Store-Einreichung|Fehlerbehebungen für 30 Tage",
    service3PriceStandard: "5.000€",
    service3NameStandard: "Standard-App",
    service3IncludesStandard: "Erweiterte Funktionalität|Premium UI/UX-Design|Fortgeschrittene Benutzerauthentifizierung|Bis zu 5 Hauptfunktionen|Web-Integration|Analytics-Einrichtung|Fehlerbehebungen für 60 Tage",
    service3PricePremium: "10.000€+",
    service3NamePremium: "Maßgeschneiderte Lösung",
    service3IncludesPremium: "Komplexe Funktionalität|Premium UI/UX mit Animationen|Vollständige Backend-Integration|Benutzerdefinierte Funktionen|API-Entwicklung|Cloud-Dienste|Erweiterte Analytik|90 Tage Support",
    service3Features: "Native Swift-Entwicklung|Intuitive Benutzeroberfläche|Nahtlose Benutzererfahrung|Webplattform-Integration|Push-Benachrichtigungen|Sichere Authentifizierung|App Store-Optimierung|Fortlaufende Wartung",
    
    serviceDetails: "Servicedetails",
    keyFeatures: "Hauptmerkmale",
    pricing: "Preisgestaltung",
    viewWorks: "Arbeiten ansehen",
    
    // Contact section
    contactTitle: "Kontakt aufnehmen",
    contactSubtitle: "Lassen Sie uns besprechen, wie ich Ihrem Unternehmen durch Webentwicklung und digitales Marketing zum Wachstum verhelfen kann",
    contactInfo: "Kontaktinformationen",
    german: "Deutsch",
    germany: "Deutschland",
    socialMedia: "Soziale Medien",
    twitter: "X (ehemals Twitter)",
    yourName: "Ihr Name",
    yourEmail: "Ihre E-Mail",
    subject: "Betreff",
    yourMessage: "Ihre Nachricht",
    sending: "Wird gesendet...",
    sendMessage: "Nachricht senden",
    footerText: "Mit Liebe gemacht von Roman Pochtman & Claude 3.5 © 2025",
    thankYou: "Vielen Dank!",
    appreciateMessage: "Ich schätze Ihre Kontaktaufnahme. Ich werde mich so schnell wie möglich bei Ihnen melden!",
    close: "Schließen",
    oops: "Hoppla!",
    errorMessage: "Beim Senden Ihrer Nachricht ist etwas schiefgelaufen. Bitte versuchen Sie es später noch einmal.",
    messageSent: "Nachricht erfolgreich gesendet!",
    messageFailed: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    errorOccurred: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal.",
    
    // Portfolio section
    recentWorks: 'Aktuelle Arbeiten',
    recentWorksDescription: 'Eine Auswahl meiner neuesten Webentwicklungsprojekte und Marketingkampagnen',
    viewProject: 'Projekt ansehen',
    overview: 'Überblick',
    technologiesUsed: 'Verwendete Technologien',
    features: 'Funktionen',
    visitWebsite: 'Website besuchen',

    // Project specific translations
    growMates: {
      title: 'GrowMates',
      description: 'Eine Plattform für Pflanzenpflege und -analyse mit KI, die Benutzern hilft, ihre Pflanzen mit personalisierten Empfehlungen zu überwachen und zu pflegen.',
      longDescription: 'GrowMates ist eine umfassende Plattform, die Benutzern hilft, ihre Pflanzen zu analysieren und zu pflegen. Die Anwendung nutzt KI-Technologie, um personalisierte Pflegeempfehlungen, automatisierte Bewässerungspläne und detaillierte Pflanzenanalysen zu liefern. Mit Web- und mobilen Schnittstellen macht GrowMates die Pflanzenpflege für Anfänger und erfahrene Gärtner zugänglich und effizient.',
      tags: ['React', 'TypeScript', 'OpenAI', 'Swift'],
      screenshots: [
        {
          title: 'Dashboard-Überblick',
          description: 'Das umfassende Dashboard bietet einen Überblick über alle Ihre Pflanzen, ihren Gesundheitszustand und anstehende Pflegeaufgaben an einem übersichtlichen Ort.'
        },
        {
          title: 'KI-Empfehlungen',
          description: 'Durch die Nutzung der OpenAI-API bietet GrowMates personalisierte Pflegeempfehlungen basierend auf Arten, Umweltbedingungen und Wachstumsmustern.'
        },
        {
          title: 'Pflegekalender',
          description: 'Der integrierte Kalender hilft Benutzern, mit zeitnahen Erinnerungen den Überblick über Bewässerungspläne, Düngung und andere Wartungsaufgaben zu behalten.'
        },
        {
          title: 'iOS Mobile App',
          description: 'Die native iOS-Begleit-App, die mit Swift entwickelt wurde, ermöglicht die Pflanzenüberwachung und -pflege unterwegs.'
        }
      ],
      features: [
        'KI-gestützte Pflegeempfehlungen',
        'Automatisierter Bewässerungsplan',
        'Moniторинг здоровья растений',
        'Detaillierte Arteninformationen',
        'iOS Mobile Begleit-App',
        'Visuelle Pflanzenanalyse'
      ]
    },
    templateWorks: {
      title: 'TemplateWorks',
      description: 'Ein webbasiertes Tool zur Steigerung der Effizienz im Kundenservice und in der Geschäftskommunikation durch automatisierte Vorlagen und Fallmanagement.',
      longDescription: 'TemplateWorks ist ein webbasiertes Tool zur Steigerung der Effizienz im Kundenservice und in der Geschäftskommunikation. Es ermöglicht Benutzern, Chat-/E-Mail-Vorlagen und Fallösungsschritte in mehreren Sprachen zu erstellen und zu verwalten. Die Plattform passt Vorlagen dynamisch basierend auf dem Namen und Geschlecht des Empfängers an, was besonders für Sprachen wie Hebräisch nützlich ist, in denen geschlechtsspezifische Grammatik erforderlich ist.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      screenshots: [
        {
          title: 'Falllösungen',
          description: 'Standardisieren und optimieren Sie Workflow zur Problemlösung mit schrittweisen Anleitungen. Teams können strukturierte Lösungsprozesse erstellen, suchen und folgen, um eine konsistente Problemlösung in der Organisation zu gewährleisten.'
        },
        {
          title: 'Vorlagenverwaltung',
          description: 'Erstellen und verwalten Sie dynamische Vorlagen, die sich automatisch an den Namen und das Geschlecht des Empfängers anpassen. Perfekt für mehrsprachigen Support, besonders für Sprachen mit geschlechtsspezifischer Grammatik wie Hebräisch.'
        }
      ],
      features: [
        'Automatisierte Vorlagen mit dynamischer Anpassung',
        'Mehrsprachige Unterstützung',
        'Verarbeitung geschlechtsspezifischer Grammatik',
        'Strukturierte Fallösungsschritte',
        'Durchsuchbare Wissensdatenbank',
        'Team-Kollaborationstools'
      ]
    }
  },
  ru: {
    // Navigation
    about: 'Обо мне',
    services: 'Услуги',
    portfolio: 'Портфолио',
    contact: 'Контакты',
    
    // Hero section
    heroTitle: 'Веб-разработчик и эксперт по цифровому маркетингу',
    heroSubtitle: 'Создаю инновационные цифровые решения, которые помогают малому бизнесу процветать',
    heroButton: 'Посмотреть мои работы',
    contactButton: 'Связаться со мной',
    
    // About section
    aboutTitle: 'Обо мне',
    aboutDesc1: "Привет, я Роман Почтман, увлеченный веб-разработчик и маркетинг-менеджер, работающий в <a href=\"https://www.google.com/maps/place/Dortmund,+Germany\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-custom-blue\">Дортмунде, Германия</a>. Я специализируюсь на веб-разработке, таргетированной рекламе и решениях для анализа данных для малого бизнеса.",
    aboutDesc2: "Имея солидный опыт в технологиях и бизнесе, я сочетаю технические знания и творческий подход к решению проблем. Моя миссия — помогать малому бизнесу достигать своих целей, предоставляя персонализированные, эффективные и ориентированные на результат решения.",
    aboutBox1Title: "Веб-разработка",
    aboutBox1Desc: "Опыт создания <span class=\"cursor-pointer text-custom-blue\" onClick=\"document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })\">адаптивных и удобных веб-сайтов</span> с использованием современных технологий и лучших практик.",
    aboutBox2Title: "Цифровой маркетинг",
    aboutBox2Desc: "Используя 1,5-летний опыт маркетинга в сочетании с сертификатами <a href=\"https://coursera.org/share/8cf3680c027a6108a46658ced95deb0a\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-custom-blue\">Google Data Analytics</a> и Meta Blueprint для создания маркетинговых стратегий на основе данных и измеримых результатов.",
    aboutBox3Title: "Разработка iOS-приложений",
    aboutBox3Desc: "Создание нативных iOS-приложений с использованием Swift, обеспечивающих плавное взаимодействие с пользователем и интеграцию с веб-платформами для комплексных решений.",
    
    // Services section
    servicesTitle: "Мои услуги",
    servicesSubtitle: "Комплексные решения по веб-разработке и цифровому маркетингу, адаптированные для роста вашего бизнеса",
    service1Title: "Разработка веб-сайтов",
    service1Desc: "Индивидуальные веб-сайты, созданные с использованием современных фреймворков и принципов адаптивного дизайна.",
    service1LongDesc: "От простых лендингов до сложных решений электронной коммерции, я создаю индивидуальные веб-сайты, которые быстры, адаптивны и удобны в использовании. Используя современные фреймворки, такие как React и Next.js, я гарантирую, что ваш веб-сайт создан с использованием новейших технологий и лучших практик. Каждый проект включает адаптивный дизайн, SEO-оптимизацию и настройку производительности.",
    service1PriceBasic: "500€",
    service1NameBasic: "Лендинг",
    service1IncludesBasic: "Одностраничный дизайн|Мобильная адаптивность|Базовая настройка SEO|Контактная форма|5 разделов контента",
    service1PriceStandard: "1 000€",
    service1NameStandard: "Многостраничный сайт",
    service1IncludesStandard: "До 5 страниц|Индивидуальный дизайн|Расширенный SEO|Настройка блога|Интеграция с социальными сетями|Настройка аналитики",
    service1PricePremium: "2 000€",
    service1NamePremium: "Решение для электронной коммерции",
    service1IncludesPremium: "Полная настройка электронной коммерции|Управление товарами|Интеграция платежей|Индивидуальные функции|Премиум-поддержка|Интеграция с маркетингом",
    service1Features: "Адаптивный дизайн|SEO-оптимизация|Настройка производительности|Современные фреймворки (React, Next.js)|Индивидуальная функциональность|Система управления контентом",
    
    service2Title: "Маркетинг в социальных сетях",
    service2Desc: "Комплексные решения по цифровому маркетингу, включая социальные сети, Google Ads и аналитику.",
    service2LongDesc: "Полный пакет цифрового маркетинга, который объединяет управление социальными сетями, платную рекламу и отслеживание эффективности. Услуги включают управление кампаниями на платформах Meta и Google Ads, подробную аналитическую отчетность и стратегическую оптимизацию для максимизации вашего ROI.",
    service2PriceBasic: "300€ /месяц",
    service2NameBasic: "Базовый пакет",
    service2IncludesBasic: "Управление платформами Meta|Базовая настройка Google Ads|Ежемесячный аналитический отчет|Базовое создание контента|Управление сообществом",
    service2PriceStandard: "800€ /месяц",
    service2NameStandard: "Стандартный пакет",
    service2IncludesStandard: "Расширенное управление Meta|Полное управление Google Ads|Еженедельные аналитические отчеты|Регулярное создание контента|Управление сообществом",
    service2PricePremium: "1 500€ /месяц",
    service2NamePremium: "Премиум-пакет",
    service2IncludesPremium: "Премиум-управление Meta и Google|Расширенная аналитика и отчетность|Ежедневное создание контента|Приоритетная поддержка|Разработка стратегии|Оптимизация ROI",
    service2Features: "Управление платформами Meta|Кампании Google Ads|Аналитика и отчетность|Создание контента|Управление сообществом|Оптимизация производительности",
    
    service3Title: "Разработка iOS-приложений",
    service3Desc: "Нативные iOS-приложения с красивым интерфейсом, плавным взаимодействием и возможностями веб-интеграции.",
    service3LongDesc: "Профессиональные услуги по разработке iOS-приложений, ориентированные на создание нативных приложений, обеспечивающих исключительный пользовательский опыт. Используя Swift и современные iOS-фреймворки, я разрабатываю приложения, оптимизированные для производительности, безопасности и визуальной привлекательности. Будь то автономное приложение или мобильное дополнение к вашей веб-платформе, я предоставляю индивидуальные решения, соответствующие вашим конкретным бизнес-потребностям.",
    service3PriceBasic: "3 000€",
    service3NameBasic: "Базовое приложение",
    service3IncludesBasic: "Основная функциональность|Чистый UI-дизайн|Базовая аутентификация пользователей|2 ключевые функции|Подача в App Store|Исправление ошибок в течение 30 дней",
    service3PriceStandard: "5 000€",
    service3NameStandard: "Стандартное приложение",
    service3IncludesStandard: "Расширенная функциональность|Премиум UI/UX-дизайн|Продвинутая аутентификация пользователей|До 5 ключевых функций|Веб-интеграция|Настройка аналитики|Исправление ошибок в течение 60 дней",
    service3PricePremium: "10 000€+",
    service3NamePremium: "Индивидуальное решение",
    service3IncludesPremium: "Сложная функциональность|Премиум UI/UX с анимациями|Полная интеграция с бэкендом|Индивидуальные функции|Разработка API|Облачные сервисы|Расширенная аналитика|Поддержка 90 дней",
    service3Features: "Нативная разработка на Swift|Интуитивный пользовательский интерфейс|Плавный пользовательский опыт|Интеграция с веб-платформой|Push-уведомления|Безопасная аутентификация|Оптимизация для App Store|Постоянное обслуживание",
    
    serviceDetails: "Детали услуги",
    keyFeatures: "Ключевые особенности",
    pricing: "Цены",
    viewWorks: "Посмотреть работы",
    
    // Contact section
    contactTitle: "Свяжитесь со мной",
    contactSubtitle: "Давайте обсудим, как я могу помочь вашему бизнесу расти с помощью веб-разработки и цифрового маркетинга",
    contactInfo: "Контактная информация",
    german: "Немецкий",
    germany: "Германия",
    socialMedia: "Социальные сети",
    twitter: "X (ранее Twitter)",
    yourName: "Ваше имя",
    yourEmail: "Ваша электронная почта",
    subject: "Тема",
    yourMessage: "Ваше сообщение",
    sending: "Отправка...",
    sendMessage: "Отправить сообщение",
    footerText: "Сделано с любовью Романом Почтманом и Claude 3.5 © 2025",
    thankYou: "Спасибо!",
    appreciateMessage: "Я ценю ваше обращение. Я свяжусь с вами как можно скорее!",
    close: "Закрыть",
    oops: "Упс!",
    errorMessage: "Что-то пошло не так при отправке вашего сообщения. Пожалуйста, попробуйте позже.",
    messageSent: "Сообщение успешно отправлено!",
    messageFailed: "Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.",
    errorOccurred: "Произошла ошибка. Пожалуйста, попробуйте позже.",
    
    // Portfolio section
    recentWorks: 'Недавние работы',
    recentWorksDescription: 'Подборка моих недавних проектов веб-разработки и маркетинговых кампаний',
    viewProject: 'Смотреть проект',
    overview: 'Обзор',
    technologiesUsed: 'Используемые технологии',
    features: 'Особенности',
    visitWebsite: 'Посетить сайт',

    // Project specific translations
    growMates: {
      title: 'GrowMates',
      description: 'Платформа для ухода за растениями и их анализа с использованием искусственного интеллекта, которая помогает пользователям контролировать и поддерживать свои растения с персонализированными рекомендациями.',
      longDescription: 'GrowMates - это комплексная платформа, предназначенная для помощи пользователям в анализе и уходе за растениями. Приложение использует технологию искусственного интеллекта для предоставления персонализированных рекомендаций по уходу за растениями, автоматизированных графиков полива и детального анализа растений. С веб-интерфейсом и мобильным приложением GrowMates делает уход за растениями доступным и эффективным как для начинающих, так и для опытных садоводов.',
      tags: ['React', 'TypeScript', 'OpenAI', 'Swift'],
      screenshots: [
        {
          title: 'Обзор панели управления',
          description: 'Комплексная панель управления предоставляет обзор всех ваших растений, их состояния здоровья и предстоящих задач по уходу в одном удобном месте.'
        },
        {
          title: 'Рекомендации ИИ',
          description: 'Используя API OpenAI, GrowMates предоставляет персонализированные рекомендации по уходу за растениями на основе вида, условий окружающей среды и моделей роста.'
        },
        {
          title: 'Календарь ухода',
          description: 'Интегрированный календарь помогает пользователям следить за графиками полива, внесения удобрений и другими задачами по обслуживанию с помощью своевременных напоминаний.'
        },
        {
          title: 'Мобильное приложение iOS',
          description: 'Нативное iOS-приложение, созданное с использованием Swift, позволяет мониторить растения и управлять уходом за ними в пути.'
        }
      ],
      features: [
        'Рекомендации по уходу на основе ИИ',
        'Автоматизированный график полива',
        'Мониторинг здоровья растений',
        'Подробная информация о видах',
        'Мобильное приложение для iOS',
        'Визуальный анализ растений'
      ]
    },
    templateWorks: {
      title: 'TemplateWorks',
      description: 'Веб-инструмент, разработанный для повышения эффективности в поддержке клиентов и бизнес-коммуникации с помощью автоматизированных шаблонов и управления разрешением проблем.',
      longDescription: 'TemplateWorks - это веб-инструмент, разработанный для повышения эффективности в поддержке клиентов и бизнес-коммуникации. Он позволяет пользователям создавать и управлять шаблонами чатов/электронной почты и шагами разрешения проблем на нескольких языках. Платформа динамически адаптирует шаблоны в зависимости от имени и пола получателя, что делает ее особенно полезной для языков, таких как иврит, где требуется грамматика с учетом пола.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      screenshots: [
        {
          title: 'Разрешение проблем',
          description: 'Стандартизируйте и оптимизируйте рабочие процессы разрешения проблем с помощью пошаговых руководств. Команды могут создавать, искать и следовать структурированным процессам разрешения, обеспечивая единообразное решение проблем во всей организации.'
        },
        {
          title: 'Управление шаблонами',
          description: 'Создавайте и управляйте динамическими шаблонами, которые автоматически адаптируются в зависимости от имени и пола получателя. Идеально подходит для многоязычной поддержки, особенно для языков с грамматикой, учитывающей пол, таких как иврит.'
        }
      ],
      features: [
        'Автоматизированные шаблоны с динамической адаптацией',
        'Многоязычная поддержка',
        'Обработка грамматики с учетом пола',
        'Структурированные шаги разрешения проблем',
        'Поисковая база знаний',
        'Инструменты командного сотрудничества'
      ]
    }
  }
};

// Create the language context
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, section?: string) => string;
  getProjectTranslation: (projectKey: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  // Simple translation function
  const t = (key: string, section?: string): string => {
    if (section) {
      return translations[language]?.[section]?.[key] || key;
    }
    return translations[language]?.[key] || key;
  };

  // Get an entire project's translations
  const getProjectTranslation = (projectKey: string): any => {
    return translations[language]?.[projectKey] || {};
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getProjectTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 