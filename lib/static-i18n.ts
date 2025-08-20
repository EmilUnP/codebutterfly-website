// Static i18n system that works with Next.js static export
export type Language = 'en' | 'ru' | 'az';

export const languages: Language[] = ['en', 'ru', 'az'];

export const languageNames = {
  en: 'English',
  ru: 'Русский',
  az: 'Azərbaycan'
};

export const defaultLanguage: Language = 'en';

// Centralized translations
export const translations = {
  en: {
    navbar: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'DIGITAL EVOLUTION',
      subtitle: 'We craft digital experiences that push boundaries and create lasting impact. From concept to execution, we transform ideas into innovative solutions that drive growth and engagement.',
      primaryCTA: 'START YOUR JOURNEY',
      secondaryCTA: 'VIEW OUR WORK',
      stats: {
        transformations: 'Digital Transformations',
        partners: 'Innovation Partners',
        years: 'Years of Future Crafting'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer comprehensive digital solutions to help your business thrive in the digital landscape.',
      webDev: {
        title: 'Web Design & Development',
        description: 'Custom websites and web applications built with modern technologies and best practices.',
        features: ['Full-stack development', 'API integration', 'Database design', 'Performance optimization']
      },
      seo: {
        title: 'SEO & Digital Marketing',
        description: 'Search engine optimization and strategic marketing to boost your online presence and drive results.',
        features: ['User research', 'Wireframing', 'Prototyping', 'User testing']
      },
      social: {
        title: 'Social Media Marketing',
        description: 'Strategic social media campaigns that build brand awareness and engage your target audience.',
        features: ['Social media marketing', 'Content strategy', 'Brand awareness', 'Lead generation']
      },
      branding: {
        title: 'Branding & Design',
        description: 'Complete brand identity design including logos, guidelines, and marketing materials.',
        features: ['Technical SEO', 'Keyword research', 'Performance tracking', 'Conversion optimization']
      },
      cta: 'Ready to see our work in action?',
      viewPortfolio: 'View Our Portfolio'
    },
    about: {
      title: 'About Us',
      subtitle: 'We are a passionate team of digital innovators dedicated to creating exceptional experiences that drive business growth.',
      stats: {
        projects: 'Projects Completed',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        satisfaction: 'Client Satisfaction'
      },
      mission: {
        title: 'Our Mission',
        description: 'To deliver innovative digital solutions that empower businesses to thrive in the digital age.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the leading digital agency that transforms ideas into exceptional digital experiences.'
      },
      values: {
        title: 'Our Values',
        description: 'Excellence, innovation, collaboration, and unwavering commitment to client success.'
      }
    },
    portfolio: {
      title: 'Portfolio Preview',
      subtitle: 'Explore a selection of our most innovative projects that showcase our expertise and creativity.',
      categories: {
        all: 'All',
        webDev: 'Web Development',
        uiux: 'UI/UX Design',
        branding: 'Branding',
        social: 'Social Media',
        seo: 'SEO'
      },
      viewFull: 'View Full Portfolio'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your next project? Let\'s discuss how we can bring your vision to life.',
      contactInfo: {
        email: {
          title: 'Email Us',
          details: 'hello@codebutterfly.com'
        },
        phone: {
          title: 'Call Us',
          details: '+1 (555) 123-4567'
        },
        location: {
          title: 'Visit Us',
          details: 'San Francisco, CA'
        },
        hours: {
          title: 'Business Hours',
          details: 'Mon-Fri: 9AM-6PM EST'
        }
      },
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message'
      }
    },
    footer: {
      description: 'We are a forward-thinking digital agency specializing in creating innovative web solutions, stunning designs, and strategic digital marketing campaigns that drive real business results.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      copyright: '© 2024 CodeButterfly. All rights reserved.',
      crafted: 'Crafted with ❤️ in San Francisco'
    }
  },
  ru: {
    navbar: {
      home: 'Главная',
      portfolio: 'Портфолио',
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты'
    },
    hero: {
      title: 'ЦИФРОВАЯ ЭВОЛЮЦИЯ',
      subtitle: 'Мы создаем цифровые впечатления, которые преодолевают границы и создают долгосрочное влияние. От концепции до исполнения мы превращаем идеи в инновационные решения, которые стимулируют рост и вовлеченность.',
      primaryCTA: 'НАЧАТЬ ПУТЕШЕСТВИЕ',
      secondaryCTA: 'ПОСМОТРЕТЬ РАБОТЫ',
      stats: {
        transformations: 'Цифровых трансформаций',
        partners: 'Инновационных партнеров',
        years: 'Лет создания будущего'
      }
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Мы предлагаем комплексные цифровые решения, которые помогут вашему бизнесу процветать в цифровом ландшафте.',
      webDev: {
        title: 'Веб-дизайн и разработка',
        description: 'Индивидуальные веб-сайты и веб-приложения, построенные с использованием современных технологий и лучших практик.',
        features: ['Полнофункциональная разработка', 'Интеграция API', 'Дизайн баз данных', 'Оптимизация производительности']
      },
      seo: {
        title: 'SEO и цифровой маркетинг',
        description: 'Поисковая оптимизация и стратегический маркетинг для повышения вашего онлайн-присутствия и достижения результатов.',
        features: ['Исследование пользователей', 'Вайрфрейминг', 'Прототипирование', 'Тестирование пользователей']
      },
      social: {
        title: 'Маркетинг в социальных сетях',
        description: 'Стратегические кампании в социальных сетях, которые повышают узнаваемость бренда и вовлекают целевую аудиторию.',
        features: ['Маркетинг в соцсетях', 'Стратегия контента', 'Узнаваемость бренда', 'Генерация лидов']
      },
      branding: {
        title: 'Брендинг и дизайн',
        description: 'Полный дизайн идентичности бренда, включая логотипы, руководства и маркетинговые материалы.',
        features: ['Техническое SEO', 'Исследование ключевых слов', 'Отслеживание производительности', 'Оптимизация конверсии']
      },
      cta: 'Готовы увидеть наши работы в действии?',
      viewPortfolio: 'Посмотреть портфолио'
    },
    about: {
      title: 'О нас',
      subtitle: 'Мы страстная команда цифровых новаторов, посвятивших себя созданию исключительных впечатлений, которые стимулируют рост бизнеса.',
      stats: {
        projects: 'Завершенных проектов',
        clients: 'Довольных клиентов',
        experience: 'Лет опыта',
        satisfaction: 'Удовлетворенность клиентов'
      },
      mission: {
        title: 'Наша миссия',
        description: 'Предоставлять инновационные цифровые решения, которые позволяют бизнесу процветать в цифровую эпоху.'
      },
      vision: {
        title: 'Наше видение',
        description: 'Быть ведущим цифровым агентством, которое превращает идеи в исключительные цифровые впечатления.'
      },
      values: {
        title: 'Наши ценности',
        description: 'Превосходство, инновации, сотрудничество и непоколебимая приверженность успеху клиентов.'
      }
    },
    portfolio: {
      title: 'Предварительный просмотр портфолио',
      subtitle: 'Изучите подборку наших самых инновационных проектов, демонстрирующих наш опыт и креативность.',
      categories: {
        all: 'Все',
        webDev: 'Веб-разработка',
        uiux: 'UI/UX дизайн',
        branding: 'Брендинг',
        social: 'Социальные сети',
        seo: 'SEO'
      },
      viewFull: 'Посмотреть полное портфолио'
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы начать следующий проект? Давайте обсудим, как мы можем воплотить ваше видение в жизнь.',
      contactInfo: {
        email: {
          title: 'Напишите нам',
          details: 'hello@codebutterfly.com'
        },
        phone: {
          title: 'Позвоните нам',
          details: '+1 (555) 123-4567'
        },
        location: {
          title: 'Посетите нас',
          details: 'Сан-Франциско, Калифорния'
        },
        hours: {
          title: 'Рабочие часы',
          details: 'Пн-Пт: 9:00-18:00 EST'
        }
      },
      form: {
        name: 'Ваше имя',
        email: 'Ваш email',
        subject: 'Тема',
        message: 'Ваше сообщение',
        send: 'Отправить сообщение'
      }
    },
    footer: {
      description: 'Мы прогрессивное цифровое агентство, специализирующееся на создании инновационных веб-решений, потрясающих дизайнов и стратегических цифровых маркетинговых кампаний, которые приносят реальные бизнес-результаты.',
      quickLinks: 'Быстрые ссылки',
      contactInfo: 'Контактная информация',
      copyright: '© 2024 CodeButterfly. Все права защищены.',
      crafted: 'Создано с ❤️ в Сан-Франциско'
    }
  },
  az: {
    navbar: {
      home: 'Ana Səhifə',
      portfolio: 'Portfolio',
      services: 'Xidmətlər',
      about: 'Haqqımızda',
      contact: 'Əlaqə'
    },
    hero: {
      title: 'RƏQƏMSAL EVOLYUSİYA',
      subtitle: 'Biz sərhədləri aşan və uzunmüddətli təsir yaradan rəqəmsal təcrübələr yaradırıq. Konsepsiyadan icra etməyə qədər ideyaları böyümə və məşğulluğu stimullaşdıran innovativ həllərə çeviririk.',
      primaryCTA: 'SƏFƏRİNİZİ BAŞLAYIN',
      secondaryCTA: 'İŞLƏRİMİZƏ BAXIN',
      stats: {
        transformations: 'Rəqəmsal transformasiyalar',
        partners: 'İnnovasiya tərəfdaşları',
        years: 'Gələcək yaratma illəri'
      }
    },
    services: {
      title: 'Xidmətlərimiz',
      subtitle: 'Biz biznesinizin rəqəmsal mühitdə inkişaf etməsinə kömək edən hərtərəfli rəqəmsal həllər təklif edirik.',
      webDev: {
        title: 'Veb Dizayn və İnkişaf',
        description: 'Müasir texnologiyalar və ən yaxşı təcrübələrlə qurulmuş fərdi veb saytlar və veb tətbiqlər.',
        features: ['Tam yığın inkişaf', 'API inteqrasiyası', 'Verilənlər bazası dizaynı', 'Performans optimallaşdırması']
      },
      seo: {
        title: 'SEO və Rəqəmsal Marketinq',
        description: 'Onlayn mövcudluğunuzu artırmaq və nəticələr əldə etmək üçün axtarış motoru optimallaşdırması və strategiya marketinqi.',
        features: ['İstifadəçi araşdırması', 'Vayrfreyminq', 'Prototipləşdirmə', 'İstifadəçi testi']
      },
      social: {
        title: 'Sosial Media Marketinqi',
        description: 'Brend şüurunu artıran və hədəf auditoriyanı cəlb edən strategiya sosial media kampaniyaları.',
        features: ['Sosial media marketinqi', 'Kontent strategiyası', 'Brend şüuru', 'Lid yaratma']
      },
      branding: {
        title: 'Brendinq və Dizayn',
        description: 'Logo, təlimatlar və marketinq materialları daxil olmaqla tam brend identikliyi dizaynı.',
        features: ['Texniki SEO', 'Açar sözlər araşdırması', 'Performans izləmə', 'Çevrilmə optimallaşdırması']
      },
      cta: 'İşlərimizi fəaliyyətdə görməyə hazırsınız?',
      viewPortfolio: 'Portfoliomuzu baxın'
    },
    about: {
      title: 'Haqqımızda',
      subtitle: 'Biz biznes böyüməsini stimullaşdıran istisna təcrübələr yaratmağa həsr olunmuş rəqəmsal innovatorların ehtiraslı komandasıyıq.',
      stats: {
        projects: 'Tamamlanmış layihələr',
        clients: 'Məmnun müştərilər',
        experience: 'İllik təcrübə',
        satisfaction: 'Müştəri məmnuniyyəti'
      },
      mission: {
        title: 'Missiyamız',
        description: 'Biznesin rəqəmsal dövrdə inkişaf etməsinə imkan verən innovativ rəqəmsal həllər təqdim etmək.'
      },
      vision: {
        title: 'Vizyonumuz',
        description: 'İdeyaları istisna rəqəmsal təcrübələrə çevirən aparıcı rəqəmsal agentlik olmaq.'
      },
      values: {
        title: 'Dəyərlərimiz',
        description: 'Mükəmməllik, innovasiya, əməkdaşlıq və müştəri uğuruna sarsılmaz sadiqlik.'
      }
    },
    portfolio: {
      title: 'Portfolio Önizləməsi',
      subtitle: 'Ekspertliyimizi və yaradıcılığımızı nümayiş etdirən ən innovativ layihələrimizin seçimini kəşf edin.',
      categories: {
        all: 'Hamısı',
        webDev: 'Veb İnkişaf',
        uiux: 'UI/UX Dizayn',
        branding: 'Brendinq',
        social: 'Sosial Media',
        seo: 'SEO'
      },
      viewFull: 'Tam Portfolioya baxın'
    },
    contact: {
      title: 'Bizimlə Əlaqə',
      subtitle: 'Növbəti layihənizi başlamağa hazırsınız? Gəlin vizyonunuzu həyata keçirməkdə necə kömək edə biləcəyimizi müzakirə edək.',
      contactInfo: {
        email: {
          title: 'Bizə yazın',
          details: 'hello@codebutterfly.com'
        },
        phone: {
          title: 'Bizə zəng edin',
          details: '+1 (555) 123-4567'
        },
        location: {
          title: 'Bizi ziyarət edin',
          details: 'San-Fransisko, Kaliforniya'
        },
        hours: {
          title: 'İş saatları',
          details: 'B.E - C.A: 9:00-18:00 EST'
        }
      },
      form: {
        name: 'Adınız',
        email: 'Email ünvanınız',
        subject: 'Mövzu',
        message: 'Mesajınız',
        send: 'Mesaj göndər'
      }
    },
    footer: {
      description: 'Biz real biznes nəticələri gətirən innovativ veb həllər, gözəl dizaynlar və strategiya rəqəmsal marketinq kampaniyaları yaradan gələcəyə yönəlmiş rəqəmsal agentliyik.',
      quickLinks: 'Sürətli linklər',
      contactInfo: 'Əlaqə məlumatları',
      copyright: '© 2024 CodeButterfly. Bütün hüquqlar qorunur.',
      crafted: 'San-Fransiskoda ❤️ ilə yaradılıb'
    }
  }
};

// Language detection and management
export function getLanguageFromURL(): Language {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const pathname = window.location.pathname;
  const langMatch = pathname.match(/^\/(en|ru|az)/);
  return (langMatch?.[1] as Language) || defaultLanguage;
}

export function getLanguageFromPathname(pathname: string): Language {
  const langMatch = pathname.match(/^\/(en|ru|az)/);
  return (langMatch?.[1] as Language) || defaultLanguage;
}

export function createLanguagePath(pathname: string, language: Language): string {
  if (language === defaultLanguage) {
    return pathname.replace(/^\/(en|ru|az)/, '') || '/';
  }
  
  const cleanPath = pathname.replace(/^\/(en|ru|az)/, '') || '/';
  return `/${language}${cleanPath}`;
}

// Hook for getting translations (works with static export)
export function useTranslations(language: Language = defaultLanguage) {
  return translations[language] || translations[defaultLanguage];
}

// Utility function for getting text
export function getText(language: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[language] || translations[defaultLanguage];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Fallback to key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}
