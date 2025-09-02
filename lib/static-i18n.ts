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
      image: "/project1.jpg",
      images: ["/project1.jpg", "/project1.1.jpg", "/project1.2.jpg"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "cyber-blue",
      duration: "4 months",
      client: "Fashion Forward Co.",
      results: ["300% increase in online sales", "50% reduction in cart abandonment", "99.9% uptime achieved"],
      teamSize: "8 developers",
      budget: "$150,000",
      challenges: ["Complex inventory management", "High-security requirements", "Scalability concerns"],
      solutions: ["Microservices architecture", "Real-time sync system", "Cloud-native deployment"],
      testimonials: ["The platform transformed our business operations completely", "Our customers love the seamless experience", "The admin dashboard is incredibly intuitive"]
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Intelligent data visualization and predictive analytics platform.",
      fullDescription: "An enterprise-level analytics dashboard that processes millions of data points in real-time, providing AI-driven insights and predictive modeling for business intelligence.",
      category: "AI & Analytics",
      image: "/project2.jpg",
      images: ["/project2.jpg", "/project2.1.jpg", "/project2.2.jpg"],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      color: "cyber-green",
      duration: "6 months",
      client: "DataCorp Inc.",
      results: ["40% faster decision making", "Real-time data processing", "AI-powered insights"],
      teamSize: "12 developers",
      budget: "$250,000",
      challenges: ["Big data processing", "Real-time analytics", "AI model accuracy"],
      solutions: ["Distributed computing", "Stream processing", "Continuous learning models"],
      testimonials: ["The insights have revolutionized our business strategy", "Real-time data gives us a competitive edge", "The AI predictions are incredibly accurate"]
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking experience for modern users.",
      fullDescription: "A comprehensive mobile banking application with biometric authentication, real-time transaction monitoring, investment portfolio management, and AI-powered fraud detection. Built with React Native for cross-platform compatibility.",
      category: "Mobile Development",
      image: "/project3.jpg",
      images: ["/project3.jpg", "/project3.1.jpg", "/project3.2.jpg"],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
      color: "cyber-purple",
      duration: "8 months",
      client: "DigitalBank Pro",
      results: ["2M+ active users", "99.99% security rating", "40% faster transactions"],
      teamSize: "15 developers",
      budget: "$400,000",
      challenges: ["Security compliance", "Cross-platform compatibility", "Real-time processing"],
      solutions: ["Bank-level encryption", "Unified codebase", "Event-driven architecture"],
      testimonials: ["Our customers love the app's security features", "The cross-platform approach saved us millions", "Real-time updates keep users engaged"]
    },
    {
      id: 4,
      title: "Smart Home IoT Platform",
      description: "Connected home automation system with intelligent device management.",
      fullDescription: "An IoT platform that connects and controls smart home devices through a unified interface. Features include voice control, automated scheduling, energy optimization, and remote monitoring capabilities.",
      category: "IoT & Hardware",
      image: "/project4.jpg",
      images: ["/project4.jpg", "/project4.1.jpg", "/project4.2.jpg"],
      technologies: ["Python", "React", "MQTT", "TensorFlow", "Raspberry Pi"],
      color: "cyber-orange",
      duration: "5 months",
      client: "SmartHome Solutions",
      results: ["30% energy savings", "5000+ devices connected", "95% user satisfaction"],
      teamSize: "10 developers",
      budget: "$180,000",
      challenges: ["Device compatibility", "Network security", "User experience"],
      solutions: ["Universal protocol support", "End-to-end encryption", "Intuitive mobile app"],
      testimonials: ["Our smart home system is incredibly reliable", "The energy savings are remarkable", "Setup was surprisingly simple"]
    },
    {
      id: 5,
      title: "Blockchain Supply Chain",
      description: "Transparent and secure supply chain tracking using blockchain technology.",
      fullDescription: "A blockchain-based supply chain management system that provides end-to-end visibility, automated compliance checking, and real-time tracking of goods from manufacturer to consumer.",
      category: "Blockchain",
      image: "/project5.jpg",
      images: ["/project5.jpg", "/project5.1.jpg", "/project5.2.jpg"],
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      color: "cyber-cyan",
      duration: "7 months",
      client: "Global Logistics Corp",
      results: ["100% transparency achieved", "60% reduction in fraud", "Real-time tracking"],
      teamSize: "14 developers",
      budget: "$320,000",
      challenges: ["Blockchain scalability", "Regulatory compliance", "Integration complexity"],
      solutions: ["Layer 2 scaling", "Smart contract automation", "API-first architecture"],
      testimonials: ["The transparency has transformed our industry", "Fraud detection is now automated", "Our partners trust the system completely"]
    }
  ],
  ru: [
    {
      id: 1,
      title: "E-Commerce Платформа",
      description: "Современный опыт покупок с бесшовным оформлением заказа и управлением запасами.",
      fullDescription: "Полное e-commerce решение для модного ритейлера с расширенной фильтрацией продуктов, функцией списка желаний, безопасной обработкой платежей и комплексной админ-панелью.",
      category: "Веб-разработка",
      image: "/project1.jpg",
      images: ["/project1.jpg", "/project1.1.jpg", "/project1.2.jpg"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "cyber-blue",
      duration: "4 месяца",
      client: "Fashion Forward Co.",
      results: ["300% увеличение онлайн-продаж", "50% снижение отказов от корзины", "99.9% время безотказной работы"],
      teamSize: "8 разработчиков",
      budget: "$150,000",
      challenges: ["Сложное управление запасами", "Высокие требования безопасности", "Проблемы масштабируемости"],
      solutions: ["Микросервисная архитектура", "Система синхронизации в реальном времени", "Облачное развертывание"],
      testimonials: ["Платформа полностью изменила наши бизнес-процессы", "Нашим клиентам нравится бесшовный опыт", "Админ-панель невероятно интуитивна"]
    },
    {
      id: 2,
      title: "AI-Аналитическая Панель",
      description: "Интеллектуальная визуализация данных и платформа прогнозной аналитики.",
      fullDescription: "Корпоративная аналитическая панель, обрабатывающая миллионы точек данных в реальном времени.",
      category: "AI и Аналитика",
      image: "/project2.jpg",
      images: ["/project2.jpg", "/project2.1.jpg", "/project2.2.jpg"],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      color: "cyber-green",
      duration: "6 месяцев",
      client: "DataCorp Inc.",
      results: ["40% быстрее принятие решений", "Обработка данных в реальном времени", "AI-инсайты"],
      teamSize: "12 разработчиков",
      budget: "$250,000",
      challenges: ["Обработка больших данных", "Аналитика в реальном времени", "Точность AI-моделей"],
      solutions: ["Распределенные вычисления", "Потоковая обработка", "Модели непрерывного обучения"],
      testimonials: ["Инсайты революционизировали нашу бизнес-стратегию", "Данные в реальном времени дают нам конкурентное преимущество", "AI-прогнозы невероятно точны"]
    },
    {
      id: 3,
      title: "Мобильное Банковское Приложение",
      description: "Безопасный и интуитивный мобильный банкинг для современных пользователей.",
      fullDescription: "Комплексное мобильное банковское приложение с биометрической аутентификацией, мониторингом транзакций в реальном времени, управлением инвестиционным портфелем и AI-обнаружением мошенничества.",
      category: "Мобильная Разработка",
      image: "/project3.jpg",
      images: ["/project3.jpg", "/project3.1.jpg", "/project3.2.jpg"],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
      color: "cyber-purple",
      duration: "8 месяцев",
      client: "DigitalBank Pro",
      results: ["2M+ активных пользователей", "99.99% рейтинг безопасности", "40% быстрее транзакции"],
      teamSize: "15 разработчиков",
      budget: "$400,000",
      challenges: ["Соответствие требованиям безопасности", "Кросс-платформенная совместимость", "Обработка в реальном времени"],
      solutions: ["Шифрование банковского уровня", "Единая кодовая база", "Событийно-ориентированная архитектура"],
      testimonials: ["Нашим клиентам нравятся функции безопасности приложения", "Кросс-платформенный подход сэкономил нам миллионы", "Обновления в реальном времени удерживают пользователей"]
    },
    {
      id: 4,
      title: "Умный Дом IoT Платформа",
      description: "Подключенная система автоматизации дома с интеллектуальным управлением устройствами.",
      fullDescription: "IoT платформа для подключения и управления умными домашними устройствами через единый интерфейс. Включает голосовое управление, автоматическое планирование, оптимизацию энергии.",
      category: "IoT и Оборудование",
      image: "/project4.jpg",
      images: ["/project4.jpg", "/project4.1.jpg", "/project4.2.jpg"],
      technologies: ["Python", "React", "MQTT", "TensorFlow", "Raspberry Pi"],
      color: "cyber-orange",
      duration: "5 месяцев",
      client: "SmartHome Solutions",
      results: ["30% экономия энергии", "5000+ подключенных устройств", "95% удовлетворенность пользователей"],
      teamSize: "10 разработчиков",
      budget: "$180,000",
      challenges: ["Совместимость устройств", "Безопасность сети", "Пользовательский опыт"],
      solutions: ["Поддержка универсальных протоколов", "Сквозное шифрование", "Интуитивное мобильное приложение"],
      testimonials: ["Наша система умного дома невероятно надежна", "Экономия энергии замечательная", "Настройка была удивительно простой"]
    },
    {
      id: 5,
      title: "Блокчейн Цепочка Поставок",
      description: "Прозрачное и безопасное отслеживание цепочки поставок с использованием блокчейн-технологии.",
      fullDescription: "Система управления цепочкой поставок на основе блокчейна, обеспечивающая полную прозрачность, автоматическую проверку соответствия и отслеживание товаров в реальном времени.",
      category: "Блокчейн",
      image: "/project5.jpg",
      images: ["/project5.jpg", "/project5.1.jpg", "/project5.2.jpg"],
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      color: "cyber-cyan",
      duration: "7 месяцев",
      client: "Global Logistics Corp",
      results: ["100% прозрачность достигнута", "60% снижение мошенничества", "Отслеживание в реальном времени"],
      teamSize: "14 разработчиков",
      budget: "$320,000",
      challenges: ["Масштабируемость блокчейна", "Регуляторное соответствие", "Сложность интеграции"],
      solutions: ["Масштабирование второго уровня", "Автоматизация смарт-контрактов", "API-первая архитектура"],
      testimonials: ["Прозрачность изменила нашу отрасль", "Обнаружение мошенничества теперь автоматизировано", "Наши партнеры полностью доверяют системе"]
    }
  ],
  az: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Müasir alış-veriş təcrübəsi və inventar idarəetməsi ilə.",
      fullDescription: "Moda pərakəndə satıcısı üçün qurulmuş tam e-commerce həlli, təkmilləşdirilmiş məhsul filtri, arzu siyahısı funksionallığı, təhlükəsiz ödəniş emalı və hərtərəfli admin paneli.",
      category: "Veb İnkişaf",
      image: "/project1.jpg",
      images: ["/project1.jpg", "/project1.1.jpg", "/project1.2.jpg"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "cyber-blue",
      duration: "4 ay",
      client: "Fashion Forward Co.",
      results: ["300% online satış artımı", "50% səbət tərk etmə azalması", "99.9% işləmə vaxtı"],
      teamSize: "8 developer",
      budget: "$150,000",
      challenges: ["Mürəkkəb inventar idarəetməsi", "Yüksək təhlükəsizlik tələbləri", "Ölçəkləndirmə narahatlıqları"],
      solutions: ["Mikroservis arxitekturası", "Real vaxt sinxronizasiya sistemi", "Bulud əsaslı yerləşdirmə"],
      testimonials: ["Platforma biznes əməliyyatlarımızı tamamilə dəyişdi", "Müştərilərimiz problemsiz təcrübəni sevirlər", "Admin paneli inanılmaz dərəcədə intuitivdir"]
    },
    {
      id: 2,
      title: "AI-Analitika Paneli",
      description: "İntellektual məlumat vizuallaşdırması və proqnoz analitika platforması.",
      fullDescription: "Milyonlarla məlumat nöqtəsini real vaxtda emal edən korporativ analitika paneli.",
      category: "AI və Analitika",
      image: "/project2.jpg",
      images: ["/project2.jpg", "/project2.1.jpg", "/project2.2.jpg"],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      color: "cyber-green",
      duration: "6 ay",
      client: "DataCorp Inc.",
      results: ["40% daha sürətli qərar qəbulu", "Real vaxtda məlumat emalı", "AI-dəstəkli içgörülər"],
      teamSize: "12 developer",
      budget: "$250,000",
      challenges: ["Böyük məlumat emalı", "Real vaxt analitikası", "AI model dəqiqliyi"],
      solutions: ["Paylanmış hesablama", "Axın emalı", "Davamlı öyrənmə modelləri"],
      testimonials: ["İçgörülər biznes strategiyamızı inqilab etdi", "Real vaxt məlumatları bizə rəqabət üstünlüyü verir", "AI proqnozları inanılmaz dərəcədə dəqiqdir"]
    },
    {
      id: 3,
      title: "Mobil Bank Tətbiqi",
      description: "Müasir istifadəçilər üçün təhlükəsiz və intuitiv mobil bank təcrübəsi.",
      fullDescription: "Biometrik autentifikasiya, real vaxtda əməliyyat monitorinqi, investisiya portfeli idarəetməsi və AI-dəstəkli dolandırıcılıq aşkarlanması ilə tam mobil bank tətbiqi.",
      category: "Mobil İnkişaf",
      image: "/project3.jpg",
      images: ["/project3.jpg", "/project3.1.jpg", "/project3.2.jpg"],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
      color: "cyber-purple",
      duration: "8 ay",
      client: "DigitalBank Pro",
      results: ["2M+ aktiv istifadəçi", "99.99% təhlükəsizlik reytinqi", "40% daha sürətli əməliyyatlar"],
      teamSize: "15 developer",
      budget: "$400,000",
      challenges: ["Təhlükəsizlik uyğunluğu", "Kross-platform uyğunluq", "Real vaxt emalı"],
      solutions: ["Bank səviyyəli şifrələmə", "Vahid kod bazası", "Hadisə əsaslı arxitektura"],
      testimonials: ["Müştərilərimiz tətbiqin təhlükəsizlik xüsusiyyətlərini sevirlər", "Kross-platform yanaşma bizə milyonlarla qənaət etdi", "Real vaxt yeniləmələri istifadəçiləri saxlayır"]
    },
    {
      id: 4,
      title: "Ağıllı Ev IoT Platforması",
      description: "İntellektual cihaz idarəetməsi ilə bağlı ev avtomatlaşdırma sistemi.",
      fullDescription: "Ağıllı ev cihazlarını vahid interfeys vasitəsilə birləşdirən və idarə edən IoT platforması. Səs idarəetməsi, avtomatik planlaşdırma, enerji optimallaşdırması daxildir.",
      category: "IoT və Avadanlıq",
      image: "/project4.jpg",
      images: ["/project4.jpg", "/project4.1.jpg", "/project4.2.jpg"],
      technologies: ["Python", "React", "MQTT", "TensorFlow", "Raspberry Pi"],
      color: "cyber-orange",
      duration: "5 ay",
      client: "SmartHome Solutions",
      results: ["30% enerji qənaəti", "5000+ bağlı cihaz", "95% istifadəçi məmnuniyyəti"],
      teamSize: "10 developer",
      budget: "$180,000",
      challenges: ["Cihaz uyğunluğu", "Şəbəkə təhlükəsizliyi", "İstifadəçi təcrübəsi"],
      solutions: ["Universal protokol dəstəyi", "Son-dan-sona şifrələmə", "İntuitiv mobil tətbiq"],
      testimonials: ["Ağıllı ev sistemimiz inanılmaz dərəcədə etibarlıdır", "Enerji qənaəti diqqət çəkicidir", "Quraşdırma təəccüblü dərəcədə sadə idi"]
    },
    {
      id: 5,
      title: "Blokçeyn Təchizat Zənciri",
      description: "Blokçeyn texnologiyasından istifadə edərək təchizat zəncirinin şəffaf və təhlükəsiz izlənilməsini.",
      fullDescription: "İstehsalçıdan istehlakçıya qədər malların real vaxtda izlənilməsini təmin edən blokçeyn əsaslı təchizat zənciri idarəetmə sistemi.",
      category: "Blokçeyn",
      image: "/project5.jpg",
      images: ["/project5.jpg", "/project5.1.jpg", "/project5.2.jpg"],
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      color: "cyber-cyan",
      duration: "7 ay",
      client: "Global Logistics Corp",
      results: ["100% şəffaflıq əldə edildi", "60% dolandırıcılıq azalması", "Real vaxtda izləmə"],
      teamSize: "14 developer",
      budget: "$320,000",
      challenges: ["Blokçeyn ölçəkləndirməsi", "Tənzimləyici uyğunluq", "İnteqrasiya mürəkkəbliyi"],
      solutions: ["İkinci səviyyə ölçəkləndirmə", "Ağıllı müqavilə avtomatlaşdırması", "API-ilk arxitektura"],
      testimonials: ["Şəffaflıq sənayimizi dəyişdi", "Dolandırıcılıq aşkarlanması indi avtomatlaşdırılıb", "Tərəfdaşlarımız sisteme tamamilə güvənirlər"]
    }
  ]
};

// Core translations
export const translations = {
  en: {
    brand: { name: "CodeButterfly", tagline: "Crafting Digital Excellence" },
    hero: {
      title: "CodeButterfly",
      evolution: "EVOLUTION",
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
    team: {
      title: "Meet Our Team",
      subtitle: "The brilliant minds behind CodeButterfly, dedicated to transforming your digital dreams into reality."
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
      copyright: "© 2025 CodeButterfly. All rights reserved.",
    }
  },
  ru: {
    brand: { name: "CodeButterfly", tagline: "Создаем Цифровое Превосходство" },
    hero: {
      title: "CodeButterfly",
      evolution: "ЭВОЛЮЦИЯ",
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
    team: {
      title: "Наша Команда",
      subtitle: "Блестящие умы за CodeButterfly, посвященные превращению ваших цифровых мечт в реальность."
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
      copyright: "© 2025 CodeButterfly. Все права защищены.",
    }
  },
  az: {
    brand: { name: "CodeButterfly", tagline: "Rəqəmsal Mükəmməllik Yaradırıq" },
    hero: {
      title: "CodeButterfly",
      evolution: "EVOLUSİYA",
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
    team: {
      title: "Komanda",
      subtitle: "CodeButterfly-in baxılmaz əlmləri, sizin rəqəmsal əyləncələrinizi həmin əlmlərə çevirməyə həsr olunmuşdur."
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
      copyright: "© 2025 CodeButterfly. Bütün hüquqlar qorunur.",
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
