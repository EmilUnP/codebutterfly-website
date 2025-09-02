/**
 * Centralized SEO Configuration for CodeButterfly Website
 * 
 * This file contains all SEO-related configurations, metadata templates,
 * and structured data schemas for the entire project.
 */

import { Metadata } from 'next';
import { Language } from './static-i18n';

// Base website configuration
export const SITE_CONFIG = {
  name: 'CodeButterfly',
  title: 'CodeButterfly - Digital Design Studio',
  description: 'We craft meaningful digital experiences that transform brands and captivate audiences through innovative design and cutting-edge technology.',
  url: 'https://codebutterfly.com',
  logo: '/main-logo.png',
  favicon: '/favicon.ico',
  ogImage: '/og-image.jpg',
  twitterHandle: '@codebutterfly',
  author: 'CodeButterfly Team',
  keywords: [
    'web development',
    'digital design',
    'UI/UX design',
    'frontend development',
    'responsive design',
    'modern web solutions',
    'creative agency',
    'digital transformation',
    'web applications',
    'mobile-first design'
  ],
  social: {
    linkedin: 'https://linkedin.com/company/codebutterfly',
    instagram: 'https://instagram.com/codebutterfly',
    twitter: 'https://twitter.com/codebutterfly',
    github: 'https://github.com/codebutterfly'
  }
} as const;

// Page-specific SEO configurations
export const PAGE_SEO_CONFIG = {
  home: {
    en: {
      title: 'CodeButterfly - Digital Design Studio | Professional Web Development',
      description: 'Transform your digital presence with CodeButterfly. Expert web development, UI/UX design, and digital solutions that drive results. Get started today!',
      keywords: 'web development, digital design, UI/UX, frontend development, responsive design, web applications',
      path: '/'
    },
    ru: {
      title: 'CodeButterfly - Студия цифрового дизайна | Профессиональная веб-разработка',
      description: 'Преобразуйте ваше цифровое присутствие с CodeButterfly. Экспертная веб-разработка, UI/UX дизайн и цифровые решения, которые приносят результаты.',
      keywords: 'веб-разработка, цифровой дизайн, UI/UX, фронтенд разработка, адаптивный дизайн, веб-приложения',
      path: '/ru'
    },
    az: {
      title: 'CodeButterfly - Rəqəmsal Dizayn Studiyası | Peşəkar Veb İnkişaf',
      description: 'CodeButterfly ilə rəqəmsal mövcudluğunuzu çevirin. Ekspert veb inkişaf, UI/UX dizayn və nəticə verən rəqəmsal həllər.',
      keywords: 'veb inkişaf, rəqəmsal dizayn, UI/UX, frontend inkişaf, responsive dizayn, veb tətbiqləri',
      path: '/az'
    }
  },
  team: {
    en: {
      title: 'Meet Our Team - CodeButterfly Professional Web Development Team',
      description: 'Meet the talented CodeButterfly team - Gulnar Talibova (Founder), Artemis (UI/UX Designer), Artimur (Project Manager), and Emil Talybov (CTO). Professional web development experts.',
      keywords: 'CodeButterfly team, web developers, UI/UX designers, project managers, CTO, founder, professional team, web development experts',
      path: '/team'
    },
    ru: {
      title: 'Наша команда - Профессиональная команда веб-разработки CodeButterfly',
      description: 'Познакомьтесь с талантливой командой CodeButterfly - Гюльнар Талибова (Основатель), Артемида (UI/UX дизайнер), Артимур (Менеджер проектов) и Эмиль Талыбов (CTO).',
      keywords: 'команда CodeButterfly, веб-разработчики, UI/UX дизайнеры, менеджеры проектов, CTO, основатель, профессиональная команда',
      path: '/ru/team'
    },
    az: {
      title: 'Komandamızla Tanış Olun - CodeButterfly Peşəkar Veb İnkişaf Komandası',
      description: 'CodeButterfly-ın istedadlı komandası ilə tanış olun - Gülənar Talıbova (Qurucu), Artemis (UI/UX Dizayner), Artimur (Layihə Meneceri) və Emil Talıbov (CTO).',
      keywords: 'CodeButterfly komandası, veb inkişafçılar, UI/UX dizaynerlər, layihə menecerləri, CTO, qurucu, peşəkar komanda',
      path: '/az/team'
    }
  },
  projects: {
    en: {
      title: 'Our Projects - CodeButterfly Portfolio | Web Development Showcase',
      description: 'Explore our portfolio of successful web development projects. From e-commerce platforms to custom web applications, see how we bring digital visions to life.',
      keywords: 'web development portfolio, project showcase, e-commerce development, custom web applications, digital solutions',
      path: '/projects'
    },
    ru: {
      title: 'Наши проекты - Портфолио CodeButterfly | Демонстрация веб-разработки',
      description: 'Изучите наше портфолио успешных проектов веб-разработки. От платформ электронной коммерции до пользовательских веб-приложений.',
      keywords: 'портфолио веб-разработки, демонстрация проектов, разработка электронной коммерции, пользовательские веб-приложения',
      path: '/ru/projects'
    },
    az: {
      title: 'Layihələrimiz - CodeButterfly Portfolyosu | Veb İnkişaf Nümayişi',
      description: 'Uğurlu veb inkişaf layihələrimizin portfolyosunu araşdırın. Elektron ticarət platformalarından fərdi veb tətbiqlərinə qədər.',
      keywords: 'veb inkişaf portfolyosu, layihə nümayişi, elektron ticarət inkişafı, fərdi veb tətbiqləri',
      path: '/az/projects'
    }
  },
  about: {
    en: {
      title: 'About Us - CodeButterfly | Digital Design Studio Story',
      description: 'Learn about CodeButterfly\'s mission to create exceptional digital experiences. Our story, values, and commitment to innovative web development.',
      keywords: 'about CodeButterfly, digital design studio, web development company, our story, company values',
      path: '/about'
    },
    ru: {
      title: 'О нас - CodeButterfly | История студии цифрового дизайна',
      description: 'Узнайте о миссии CodeButterfly по созданию исключительных цифровых впечатлений. Наша история, ценности и приверженность инновационной веб-разработке.',
      keywords: 'о CodeButterfly, студия цифрового дизайна, компания веб-разработки, наша история, ценности компании',
      path: '/ru/about'
    },
    az: {
      title: 'Haqqımızda - CodeButterfly | Rəqəmsal Dizayn Studiyasının Hekayəsi',
      description: 'CodeButterfly-ın istisna rəqəmsal təcrübələr yaratmaq missiyası haqqında öyrənin. Bizim hekayəmiz, dəyərlərimiz və innovativ veb inkişafa sadiqlik.',
      keywords: 'CodeButterfly haqqında, rəqəmsal dizayn studiyası, veb inkişaf şirkəti, bizim hekayə, şirkət dəyərləri',
      path: '/az/about'
    }
  },
  contact: {
    en: {
      title: 'Contact Us - CodeButterfly | Get Your Project Started',
      description: 'Ready to start your next web development project? Contact CodeButterfly today for a free consultation. Let\'s bring your digital vision to life.',
      keywords: 'contact CodeButterfly, web development consultation, start project, get quote, digital solutions',
      path: '/contact'
    },
    ru: {
      title: 'Свяжитесь с нами - CodeButterfly | Начните свой проект',
      description: 'Готовы начать свой следующий проект веб-разработки? Свяжитесь с CodeButterfly сегодня для бесплатной консультации.',
      keywords: 'связаться с CodeButterfly, консультация по веб-разработке, начать проект, получить предложение',
      path: '/ru/contact'
    },
    az: {
      title: 'Bizimlə Əlaqə - CodeButterfly | Layihənizi Başladın',
      description: 'Növbəti veb inkişaf layihənizi başlamağa hazırsınız? CodeButterfly ilə əlaqə saxlayın və pulsuz məsləhət alın.',
      keywords: 'CodeButterfly ilə əlaqə, veb inkişaf məsləhəti, layihə başlatmaq, təklif almaq',
      path: '/az/contact'
    }
  }
} as const;

// Team member data for structured data
export const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'Gulnar Talibova',
    role: 'Founder & Designer',
    image: '/Founder.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/'
    },
    description: 'Meet Gulnar Talibova, Founder and Designer at CodeButterfly. Leading innovative design solutions and strategic vision for cutting-edge web development projects.'
  },
  {
    id: '2',
    name: 'Artemis',
    role: 'UI/UX Designer',
    image: '/designer.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/'
    },
    description: 'Artemis is a skilled UI/UX Designer at CodeButterfly, specializing in creating exceptional user experiences and modern interface designs.'
  },
  {
    id: '3',
    name: 'Artimur',
    role: 'Project Manager',
    image: '/manager.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/'
    },
    description: 'Artimur leads project management at CodeButterfly, ensuring seamless delivery and exceptional client satisfaction through strategic planning and coordination.'
  },
  {
    id: '4',
    name: 'Emil Talybov',
    role: 'CTO',
    image: '/developer.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/'
    },
    description: 'Emil Talybov serves as CTO at CodeButterfly, driving technical innovation and leading development teams to create scalable, high-performance solutions.'
  }
] as const;

// Services data for structured data
export const SERVICES = [
  {
    name: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    category: 'Development'
  },
  {
    name: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience and engagement.',
    category: 'Design'
  },
  {
    name: 'Digital Strategy',
    description: 'Strategic planning and consultation for digital transformation initiatives.',
    category: 'Consulting'
  },
  {
    name: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration and inventory management.',
    category: 'Development'
  }
] as const;

// Generate metadata for a specific page
export function generatePageMetadata(
  page: keyof typeof PAGE_SEO_CONFIG,
  language: Language = 'en'
): Metadata {
  const config = PAGE_SEO_CONFIG[page][language];
  const fullUrl = `${SITE_CONFIG.url}${config.path}`;
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: language === 'en' ? 'en_US' : language === 'ru' ? 'ru_RU' : 'az_AZ',
      url: fullUrl,
      title: config.title,
      description: config.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      title: config.title,
      description: config.description,
      images: [`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`],
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'en': `${SITE_CONFIG.url}/`,
        'ru': `${SITE_CONFIG.url}/ru`,
        'az': `${SITE_CONFIG.url}/az`,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
      yandex: 'your-yandex-verification-code', // Replace with actual verification code
    },
  };
}

// Generate organization structured data
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AZ', // Update with actual country
      addressLocality: 'Baku', // Update with actual city
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@codebutterfly.com', // Update with actual email
    },
    sameAs: Object.values(SITE_CONFIG.social),
    employee: TEAM_MEMBERS.map(member => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      description: member.description,
      image: `${SITE_CONFIG.url}${member.image}`,
      sameAs: Object.values(member.social).filter(Boolean),
    })),
    makesOffer: SERVICES.map(service => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        category: service.category,
      },
    })),
  };
}

// Generate website structured data
export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    },
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
