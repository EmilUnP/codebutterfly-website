// Static internationalization system for CodeButterfly
export type Language = 'en' | 'ru' | 'az';

export const languages: Language[] = ['en', 'ru', 'az'];
export const languageNames = {
  en: 'English',
  ru: 'Русский',
  az: 'Azərbaycan'
};
export const defaultLanguage: Language = 'en';

// Portfolio data with translations
export const portfolioData = {
  en: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern shopping experience with seamless checkout and inventory management.",
      fullDescription: "A complete e-commerce solution built for a fashion retailer, featuring advanced product filtering, wishlist functionality, secure payment processing, and comprehensive admin dashboard. The platform handles over 10,000 products with real-time inventory management.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "cyber-blue",
      duration: "4 months",
      client: "Fashion Forward Co.",
      results: ["300% increase in online sales", "50% reduction in cart abandonment", "99.9% uptime achieved"]
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Intelligent data visualization and predictive analytics platform.",
      fullDescription: "An enterprise-level analytics dashboard that processes millions of data points in real-time, providing AI-driven insights and predictive modeling for business intelligence.",
      category: "AI & Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      color: "cyber-green",
      duration: "6 months",
      client: "DataCorp Inc.",
      results: ["40% faster decision making", "Real-time data processing", "AI-powered insights"]
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking experience for modern users.",
      fullDescription: "A comprehensive mobile banking application with biometric authentication, real-time transaction monitoring, investment portfolio management, and AI-powered fraud detection. Built with React Native for cross-platform compatibility.",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
      color: "cyber-purple",
      duration: "8 months",
      client: "DigitalBank Pro",
      results: ["2M+ active users", "99.99% security rating", "40% faster transactions"]
    },
    {
      id: 4,
      title: "Smart Home IoT Platform",
      description: "Connected home automation system with intelligent device management.",
      fullDescription: "An IoT platform that connects and controls smart home devices through a unified interface. Features include voice control, automated scheduling, energy optimization, and remote monitoring capabilities.",
      category: "IoT & Hardware",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["Python", "React", "MQTT", "TensorFlow", "Raspberry Pi"],
      color: "cyber-orange",
      duration: "5 months",
      client: "SmartHome Solutions",
      results: ["30% energy savings", "5000+ devices connected", "95% user satisfaction"]
    },
    {
      id: 5,
      title: "Blockchain Supply Chain",
      description: "Transparent and secure supply chain tracking using blockchain technology.",
      fullDescription: "A blockchain-based supply chain management system that provides end-to-end visibility, automated compliance checking, and real-time tracking of goods from manufacturer to consumer.",
      category: "Blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      color: "cyber-cyan",
      duration: "7 months",
      client: "Global Logistics Corp",
      results: ["100% transparency achieved", "60% reduction in fraud", "Real-time tracking"]
    }
  ],
  ru: [
    {
      id: 1,
      title: "E-Commerce Платформа",
      description: "Современный опыт покупок с бесшовным оформлением заказа и управлением запасами.",
      fullDescription: "Полное e-commerce решение для модного ритейлера с расширенной фильтрацией продуктов, функцией списка желаний, безопасной обработкой платежей и комплексной админ-панелью.",
      category: "Веб-разработка",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "cyber-blue",
      duration: "4 месяца",
      client: "Fashion Forward Co.",
      results: ["300% увеличение онлайн-продаж", "50% снижение отказов от корзины", "99.9% время безотказной работы"]
    },
    {
      id: 2,
      title: "AI-Аналитическая Панель",
      description: "Интеллектуальная визуализация данных и платформа прогнозной аналитики.",
      fullDescription: "Корпоративная аналитическая панель, обрабатывающая миллионы точек данных в реальном времени.",
      category: "AI и Аналитика",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      color: "cyber-green",
      duration: "6 месяцев",
      client: "DataCorp Inc.",
      results: ["40% быстрее принятие решений", "Обработка данных в реальном времени", "AI-инсайты"]
    },
    {
      id: 3,
      title: "Мобильное Банковское Приложение",
      description: "Безопасный и интуитивный мобильный банкинг для современных пользователей.",
      fullDescription: "Комплексное мобильное банковское приложение с биометрической аутентификацией, мониторингом транзакций в реальном времени, управлением инвестиционным портфелем и AI-обнаружением мошенничества.",
      category: "Мобильная Разработка",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
      color: "cyber-purple",
      duration: "8 месяцев",
      client: "DigitalBank Pro",
      results: ["2M+ активных пользователей", "99.99% рейтинг безопасности", "40% быстрее транзакции"]
    },
    {
      id: 4,
      title: "Умный Дом IoT Платформа",
      description: "Подключенная система автоматизации дома с интеллектуальным управлением устройствами.",
      fullDescription: "IoT платформа для подключения и управления умными домашними устройствами через единый интерфейс. Включает голосовое управление, автоматическое планирование, оптимизацию энергии.",
      category: "IoT и Оборудование",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["Python", "React", "MQTT", "TensorFlow", "Raspberry Pi"],
      color: "cyber-orange",
      duration: "5 месяцев",
      client: "SmartHome Solutions",
      results: ["30% экономия энергии", "5000+ подключенных устройств", "95% удовлетворенность пользователей"]
    },
    {
      id: 5,
      title: "Блокчейн Цепочка Поставок",
      description: "Прозрачное и безопасное отслеживание цепочки поставок с использованием блокчейн-технологии.",
      fullDescription: "Система управления цепочкой поставок на основе блокчейна, обеспечивающая полную прозрачность, автоматическую проверку соответствия и отслеживание товаров в реальном времени.",
      category: "Блокчейн",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      color: "cyber-cyan",
      duration: "7 месяцев",
      client: "Global Logistics Corp",
      results: ["100% прозрачность достигнута", "60% снижение мошенничества", "Отслеживание в реальном времени"]
    }
  ],
  az: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Müasir alış-veriş təcrübəsi və inventar idarəetməsi ilə.",
      fullDescription: "Moda pərakəndə satıcısı üçün qurulmuş tam e-commerce həlli, təkmilləşdirilmiş məhsul filtri, arzu siyahısı funksionallığı, təhlükəsiz ödəniş emalı və hərtərəfli admin paneli.",
      category: "Veb İnkişaf",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "cyber-blue",
      duration: "4 ay",
      client: "Fashion Forward Co.",
      results: ["300% online satış artımı", "50% səbət tərk etmə azalması", "99.9% işləmə vaxtı"]
    },
    {
      id: 2,
      title: "AI-Analitika Paneli",
      description: "İntellektual məlumat vizuallaşdırması və proqnoz analitika platforması.",
      fullDescription: "Milyonlarla məlumat nöqtəsini real vaxtda emal edən korporativ analitika paneli.",
      category: "AI və Analitika",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      color: "cyber-green",
      duration: "6 ay",
      client: "DataCorp Inc.",
      results: ["40% daha sürətli qərar qəbulu", "Real vaxtda məlumat emalı", "AI-dəstəkli içgörülər"]
    },
    {
      id: 3,
      title: "Mobil Bank Tətbiqi",
      description: "Müasir istifadəçilər üçün təhlükəsiz və intuitiv mobil bank təcrübəsi.",
      fullDescription: "Biometrik autentifikasiya, real vaxtda əməliyyat monitorinqi, investisiya portfeli idarəetməsi və AI-dəstəkli dolandırıcılıq aşkarlanması ilə tam mobil bank tətbiqi.",
      category: "Mobil İnkişaf",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
      color: "cyber-purple",
      duration: "8 ay",
      client: "DigitalBank Pro",
      results: ["2M+ aktiv istifadəçi", "99.99% təhlükəsizlik reytinqi", "40% daha sürətli əməliyyatlar"]
    },
    {
      id: 4,
      title: "Ağıllı Ev IoT Platforması",
      description: "İntellektual cihaz idarəetməsi ilə bağlı ev avtomatlaşdırma sistemi.",
      fullDescription: "Ağıllı ev cihazlarını vahid interfeys vasitəsilə birləşdirən və idarə edən IoT platforması. Səs idarəetməsi, avtomatik planlaşdırma, enerji optimallaşdırması daxildir.",
      category: "IoT və Avadanlıq",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["Python", "React", "MQTT", "TensorFlow", "Raspberry Pi"],
      color: "cyber-orange",
      duration: "5 ay",
      client: "SmartHome Solutions",
      results: ["30% enerji qənaəti", "5000+ bağlı cihaz", "95% istifadəçi məmnuniyyəti"]
    },
    {
      id: 5,
      title: "Blokçeyn Təchizat Zənciri",
      description: "Blokçeyn texnologiyasından istifadə edərək təchizat zəncirinin şəffaf və təhlükəsiz izlənilməsi.",
      fullDescription: "İstehsalçıdan istehlakçıya qədər malların real vaxtda izlənilməsini təmin edən blokçeyn əsaslı təchizat zənciri idarəetmə sistemi.",
      category: "Blokçeyn",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      color: "cyber-cyan",
      duration: "7 ay",
      client: "Global Logistics Corp",
      results: ["100% şəffaflıq əldə edildi", "60% dolandırıcılıq azalması", "Real vaxtda izləmə"]
    }
  ]
};

// Core translations
export const translations = {
  en: {
    brand: { name: "CodeButterfly", tagline: "Crafting Digital Excellence" },
    hero: {
      title: "CodeButterfly",
      subtitle: "We craft digital experiences that push boundaries and create lasting impact. From concept to execution, we transform ideas into innovative solutions that drive growth and engagement.",
      cta: "Get Started",
      primaryCTA: "Get Started",
      stats: {
        transformations: "Digital Transformations",
        partners: "Happy Partners",
        years: "Years of Excellence"
      }
    },
    navbar: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact"
    },
    portfolio: {
      title: "Our Complete Portfolio",
      subtitle: "Explore our comprehensive collection of digital solutions and creative projects.",
      viewFull: "View Full Portfolio",
      backToPortfolio: "Back to Portfolio",
      projectDetails: "Project Details",
      technologies: "Technologies Used",
      duration: "Duration",
      client: "Client",
      results: "Results",
      challenges: "Challenges",
      solutions: "Solutions",
      gallery: "Project Gallery",
      categories: {
        all: "All Categories",
        webDev: "Web Development",
        uiux: "UI/UX Design",
        branding: "Branding",
        social: "Social Media",
        seo: "SEO"
      },
      notFound: "Project not found",
      viewLive: "View Live",
      viewCode: "View Code",
      features: "Project Features",
      relatedProjects: "Related Projects",
      category: "Category"
    },
    about: {
      title: "About Us",
      subtitle: "We are a team of passionate innovators dedicated to transforming businesses through cutting-edge digital solutions.",
      stats: {
        projects: "Projects Completed",
        clients: "Happy Clients",
        experience: "Years Experience",
        satisfaction: "Client Satisfaction"
      },
      mission: {
        title: "Our Mission",
        description: "To empower businesses with innovative digital solutions that drive growth and success."
      },
      vision: {
        title: "Our Vision",
        description: "To be the leading digital transformation partner for forward-thinking organizations."
      },
      values: {
        title: "Our Values",
        description: "Innovation, excellence, and unwavering commitment to client success."
      }
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions tailored to your business needs",
      cta: "Get Started",
      viewPortfolio: "View Portfolio",
      webDev: {
        title: "Web Development",
        description: "Custom websites and web applications built with cutting-edge technologies",
        features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern Frameworks"]
      },
      seo: {
        title: "SEO & Marketing",
        description: "Strategic digital marketing to boost your online presence and drive growth",
        features: ["Keyword Research", "Content Strategy", "Analytics & Reporting", "Conversion Optimization"]
      },
      social: {
        title: "Social Media",
        description: "Engaging social media campaigns that build brand awareness and community",
        features: ["Content Creation", "Community Management", "Paid Advertising", "Performance Tracking"]
      },
      branding: {
        title: "Branding & Design",
        description: "Creative design solutions that establish your unique brand identity",
        features: ["Logo Design", "Visual Identity", "Brand Guidelines", "Marketing Materials"]
      }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to start your digital transformation journey? Let's discuss your project.",
      form: { 
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message"
      },
      contactInfo: {
        email: {
          title: "Email Us",
          details: "hello@codebutterfly.com"
        },
        phone: {
          title: "Call Us",
          details: "+1 (555) 123-4567"
        },
        location: {
          title: "Visit Us",
          details: "San Francisco, California"
        },
        hours: {
          title: "Business Hours",
          details: "Mon - Fri: 9:00-18:00 EST"
        }
      }
    },
    footer: {
      description: "We are a future-focused digital agency creating innovative web solutions, beautiful designs, and strategic digital marketing campaigns that deliver real business results.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Information",
      copyright: "© 2024 CodeButterfly. All rights reserved.",
      crafted: "Crafted with ❤️ in San Francisco"
    }
  },
  ru: {
    brand: { name: "CodeButterfly", tagline: "Создаем Цифровое Превосходство" },
    hero: {
      title: "CodeButterfly",
      subtitle: "Мы создаем цифровые впечатления, которые преодолевают границы и создают долгосрочное влияние. От концепции до исполнения мы превращаем идеи в инновационные решения, которые стимулируют рост и вовлеченность.",
      cta: "Начать",
      primaryCTA: "Начать",
      stats: {
        transformations: "Цифровые Трансформации",
        partners: "Довольные Партнеры",
        years: "Лет Превосходства"
      }
    },
    navbar: {
      home: "Главная",
      services: "Услуги",
      portfolio: "Портфолио",
      about: "О нас",
      contact: "Контакты"
    },
    portfolio: {
      title: "Наше Полное Портфолио",
      subtitle: "Изучите нашу комплексную коллекцию цифровых решений и творческих проектов.",
      viewFull: "Посмотреть Все Портфолио",
      backToPortfolio: "Назад к Портфолио",
      projectDetails: "Детали Проекта",
      technologies: "Используемые Технологии",
      duration: "Продолжительность",
      client: "Клиент",
      results: "Результаты",
      challenges: "Проблемы",
      solutions: "Решения",
      gallery: "Галерея Проекта",
      categories: {
        all: "Все Категории",
        webDev: "Веб-разработка",
        uiux: "UI/UX Дизайн",
        branding: "Брендинг",
        social: "Социальные Сети",
        seo: "SEO"
      },
      notFound: "Проект не найден",
      viewLive: "Посмотреть Живой",
      viewCode: "Посмотреть Код",
      features: "Особенности Проекта",
      relatedProjects: "Похожие Проекты",
      category: "Категория"
    },
    about: {
      title: "О Нас",
      subtitle: "Мы команда страстных новаторов, посвятивших себя трансформации бизнеса через передовые цифровые решения.",
      stats: {
        projects: "Завершенных Проектов",
        clients: "Довольных Клиентов",
        experience: "Лет Опыта",
        satisfaction: "Удовлетворенность Клиентов"
      },
      mission: {
        title: "Наша Миссия",
        description: "Наделять бизнес инновационными цифровыми решениями, которые стимулируют рост и успех."
      },
      vision: {
        title: "Наше Видение",
        description: "Быть ведущим партнером по цифровой трансформации для прогрессивных организаций."
      },
      values: {
        title: "Наши Ценности",
        description: "Инновации, превосходство и непоколебимая приверженность успеху клиентов."
      }
    },
    services: {
      title: "Наши Услуги",
      subtitle: "Комплексные цифровые решения, адаптированные под ваши бизнес-потребности",
      cta: "Начать",
      viewPortfolio: "Посмотреть Портфолио",
      webDev: {
        title: "Веб-разработка",
        description: "Индивидуальные веб-сайты и веб-приложения, созданные с использованием передовых технологий",
        features: ["Адаптивный Дизайн", "SEO Оптимизация", "Фокус на Производительности", "Современные Фреймворки"]
      },
      seo: {
        title: "SEO и Маркетинг",
        description: "Стратегический цифровой маркетинг для повышения вашего онлайн-присутствия и стимулирования роста",
        features: ["Исследование Ключевых Слов", "Стратегия Контента", "Аналитика и Отчетность", "Оптимизация Конверсии"]
      },
      social: {
        title: "Социальные Сети",
        description: "Увлекательные кампании в социальных сетях, которые создают узнаваемость бренда и сообщество",
        features: ["Создание Контента", "Управление Сообществом", "Платная Реклама", "Отслеживание Результатов"]
      },
      branding: {
        title: "Брендинг и Дизайн",
        description: "Креативные дизайн-решения, которые устанавливают вашу уникальную идентичность бренда",
        features: ["Дизайн Логотипа", "Визуальная Идентичность", "Руководство по Бренду", "Маркетинговые Материалы"]
      }
    },
    contact: {
      title: "Свяжитесь с Нами",
      subtitle: "Готовы начать свой путь цифровой трансформации? Давайте обсудим ваш проект.",
      form: { 
        name: "Ваше Имя",
        email: "Ваш Email",
        subject: "Тема",
        message: "Ваше Сообщение",
        send: "Отправить Сообщение"
      },
      contactInfo: {
        email: {
          title: "Напишите Нам",
          details: "hello@codebutterfly.com"
        },
        phone: {
          title: "Позвоните Нам",
          details: "+1 (555) 123-4567"
        },
        location: {
          title: "Посетите Нас",
          details: "Сан-Франциско, Калифорния"
        },
        hours: {
          title: "Рабочие Часы",
          details: "Пн - Пт: 9:00-18:00 EST"
        }
      }
    },
    footer: {
      description: "Мы агентство, ориентированное на будущее, создающее инновационные веб-решения, красивые дизайны и стратегические кампании цифрового маркетинга, которые приносят реальные бизнес-результаты.",
      quickLinks: "Быстрые Ссылки",
      contactInfo: "Контактная Информация",
      copyright: "© 2024 CodeButterfly. Все права защищены.",
      crafted: "Создано с ❤️ в Сан-Франциско"
    }
  },
  az: {
    brand: { name: "CodeButterfly", tagline: "Rəqəmsal Mükəmməllik Yaradırıq" },
    hero: {
      title: "CodeButterfly",
      subtitle: "Biz sərhədləri aşan və uzunmüddətli təsir yaradan rəqəmsal təcrübələr yaradırıq. Konsepsiyadan icra etməyə qədər ideyaları artım və təşəbbüskarlığı stimullaşdıran innovativ həllərə çeviririk.",
      cta: "Başla",
      primaryCTA: "Başla",
      stats: {
        transformations: "Rəqəmsal Transformasiyalar",
        partners: "Xoşbəxt Tərəfdaşlar",
        years: "Mükəmməllik İlləri"
      }
    },
    navbar: {
      home: "Ana Səhifə",
      services: "Xidmətlər",
      portfolio: "Portfolio",
      about: "Haqqımızda",
      contact: "Əlaqə"
    },
    portfolio: {
      title: "Tam Portfolio",
      subtitle: "Rəqəmsal həllər və yaradıcı layihələrin hərtərəfli kolleksiyasını kəşf edin.",
      viewFull: "Tam Portfolio",
      backToPortfolio: "Portfolio-ya Qayıt",
      projectDetails: "Layihə Detalları",
      technologies: "İstifadə Edilən Texnologiyalar",
      duration: "Müddət",
      client: "Müştəri",
      results: "Nəticələr",
      challenges: "Çətinliklər",
      solutions: "Həllər",
      gallery: "Layihə Qalereyası",
      categories: {
        all: "Bütün Kateqoriyalar",
        webDev: "Veb İnkişaf",
        uiux: "UI/UX Dizayn",
        branding: "Brendinq",
        social: "Sosial Media",
        seo: "SEO"
      },
      notFound: "Layihə tapılmadı",
      viewLive: "Canlı Bax",
      viewCode: "Koda Bax",
      features: "Layihə Xüsusiyyətləri",
      relatedProjects: "Əlaqəli Layihələr",
      category: "Kateqoriya"
    },
    about: {
      title: "Haqqımızda",
      subtitle: "Biz biznesi rəqəmsal həllər vasitəsilə transformasiya etməyə həsr olunmuş ehtiraslı innovatorlar komandasıyıq.",
      stats: {
        projects: "Tamamlanmış Layihələr",
        clients: "Xoşbəxt Müştərilər",
        experience: "İllik Təcrübə",
        satisfaction: "Müştəri Məmnuniyyəti"
      },
      mission: {
        title: "Missiyamız",
        description: "Biznesi artım və uğuru stimullaşdıran innovativ rəqəmsal həllərlə gücləndirmək."
      },
      vision: {
        title: "Vizyonumuz",
        description: "İrəli baxan təşkilatların aparıcı rəqəmsal transformasiya tərəfdaşı olmaq."
      },
      values: {
        title: "Dəyərlərimiz",
        description: "İnnovasiya, mükəmməllik və müştəri uğuruna sarsılmaz sadiqlik."
      }
    },
    services: {
      title: "Xidmətlərimiz",
      subtitle: "Biznes ehtiyaclarınıza uyğunlaşdırılmış hərtərəfli rəqəmsal həllər",
      cta: "Başla",
      viewPortfolio: "Portfolio-ya Bax",
      webDev: {
        title: "Veb İnkişaf",
        description: "Müasir texnologiyalarla qurulmuş fərdi veb saytlar və veb tətbiqlər",
        features: ["Responsiv Dizayn", "SEO Optimizasiyası", "Performans Fokusu", "Müasir Framework-lər"]
      },
      seo: {
        title: "SEO və Marketinq",
        description: "Onlayn mövcudluğunuzu artırmaq və artımı stimullaşdırmaq üçün strateji rəqəmsal marketinq",
        features: ["Açar Sözlər Araşdırması", "Kontent Strategiyası", "Analitika və Hesabat", "Konversiya Optimizasiyası"]
      },
      social: {
        title: "Sosial Media",
        description: "Brend tanınması və icma yaradan cəlbedici sosial media kampaniyaları",
        features: ["Kontent Yaratma", "İcma İdarəetməsi", "Ödənişli Reklam", "Performans İzləməsi"]
      },
      branding: {
        title: "Brendinq və Dizayn",
        description: "Unikal brend kimliyinizi quran yaradıcı dizayn həlləri",
        features: ["Logo Dizaynı", "Vizual Kimlik", "Brend Təlimatları", "Marketinq Materialları"]
      }
    },
    contact: {
      title: "Bizimlə Əlaqə",
      subtitle: "Rəqəmsal transformasiya səyahətinizi başlamağa hazırsınız? Layihənizi müzakirə edək.",
      form: { 
        name: "Adınız",
        email: "Email Ünvanınız",
        subject: "Mövzu",
        message: "Mesajınız",
        send: "Mesaj Göndər"
      },
      contactInfo: {
        email: {
          title: "Bizə Yazın",
          details: "hello@codebutterfly.com"
        },
        phone: {
          title: "Bizə Zəng Edin",
          details: "+1 (555) 123-4567"
        },
        location: {
          title: "Bizi Ziyarət Edin",
          details: "San-Fransisko, Kaliforniya"
        },
        hours: {
          title: "İş Saatları",
          details: "B.E - C.A: 9:00-18:00 EST"
        }
      }
    },
    footer: {
      description: "Biz gələcəyə yönəlmiş rəqəmsal agentliyik, real biznes nəticələri gətirən innovativ veb həllər, gözəl dizaynlar və strategiya rəqəmsal marketinq kampaniyaları yaradırıq.",
      quickLinks: "Sürətli Linklər",
      contactInfo: "Əlaqə Məlumatları",
      copyright: "© 2024 CodeButterfly. Bütün hüquqlar qorunur.",
      crafted: "San-Fransiskoda ❤️ ilə yaradılıb"
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
  // If no language prefix is found, it's the English (default) page
  return (langMatch?.[1] as Language) || 'en';
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

// Get portfolio data for specific language
export function getPortfolioData(language: Language) {
  return portfolioData[language] || portfolioData[defaultLanguage];
}

// Get specific portfolio item
export function getPortfolioItem(language: Language, id: number) {
  const data = getPortfolioData(language);
  return data.find(item => item.id === id);
}
