export type Language = 'en' | 'ru' | 'az';

export const languages: { code: Language; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycan', flag: '🇦🇿' },
];

export interface Translations {
  // Navbar
  navbar: {
    home: string;
    portfolio: string;
    about: string;
    services: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    cta: {
      primary: string;
      secondary: string;
    };
    stats: {
      projects: string;
      clients: string;
      experience: string;
      satisfaction: string;
    };
    scrollIndicator: string;
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      description: string;
    };
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      title: string;
      button: string;
    };
    items: {
      webDesign: {
        title: string;
        description: string;
      };
      seo: {
        title: string;
        description: string;
      };
      socialMedia: {
        title: string;
        description: string;
      };
      digitalMarketing: {
        title: string;
        description: string;
      };
    };
  };
  
  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    description: string;
    categories: {
      all: string;
      webDevelopment: string;
      uiUxDesign: string;
      branding: string;
      socialMedia: string;
      seo: string;
    };
    cta: {
      viewMore: string;
      viewDetails: string;
      clickToView: string;
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      subject: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
      submit: string;
    };
    info: {
      email: string;
      phone: string;
      address: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    quickLinks: {
      title: string;
      home: string;
      about: string;
      services: string;
      portfolio: string;
      contact: string;
    };
    services: {
      title: string;
      webDesign: string;
      seo: string;
      socialMedia: string;
      digitalMarketing: string;
    };
    contact: {
      title: string;
      email: string;
      phone: string;
      address: string;
    };
    copyright: string;
  };
  
  // Projects Page
  projects: {
    title: string;
    subtitle: string;
    description: string;
    pagination: {
      showing: string;
      of: string;
      projects: string;
      previous: string;
      next: string;
      jumpToPage: string;
    };
    filters: {
      all: string;
      webDevelopment: string;
      uiUxDesign: string;
      branding: string;
      socialMedia: string;
      seo: string;
    };
  };
  
  // Project Details
  projectDetail: {
    backToPortfolio: string;
    projectOverview: string;
    projectGallery: string;
    challengesAndSolutions: string;
    challenges: string;
    solutions: string;
    results: string;
    projectDetails: {
      title: string;
      duration: string;
      client: string;
      category: string;
    };
    technologiesUsed: string;
    readyToStart: {
      title: string;
      description: string;
      button: string;
    };
    exploreMore: {
      title: string;
      button: string;
    };
    notFound: {
      title: string;
      description: string;
      button: string;
    };
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    tryAgain: string;
    getStarted: string;
    learnMore: string;
    viewAll: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      home: "Home",
      portfolio: "Portfolio",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      badge: "FUTURE-FORWARD DIGITAL STUDIO",
      title: "Digital Evolution",
      subtitle: "Crafting Digital Experiences That Transform Businesses",
      description: "We specialize in creating cutting-edge digital solutions that blend aesthetic excellence with functional innovation. From web development to digital marketing, we bring your vision to life.",
      cta: {
        primary: "GET STARTED",
        secondary: "VIEW OUR WORK",
      },
      stats: {
        projects: "Projects Completed",
        clients: "Happy Clients",
        experience: "Years Experience",
        satisfaction: "Client Satisfaction",
      },
      scrollIndicator: "Scroll to explore",
    },
    about: {
      title: "About CodeButterfly",
      subtitle: "Innovation Through Technology",
      description: "We are a forward-thinking digital agency passionate about creating exceptional digital experiences that drive business growth and user engagement.",
      mission: {
        title: "Our Mission",
        description: "To empower businesses with innovative digital solutions that create lasting impact and drive meaningful growth in the digital landscape.",
      },
      vision: {
        title: "Our Vision",
        description: "To be the leading catalyst for digital transformation, helping businesses soar to new heights through cutting-edge technology and creative excellence.",
      },
      values: {
        title: "Our Values",
        description: "Innovation, excellence, and client success are at the core of everything we do. We believe in pushing boundaries and delivering results that exceed expectations.",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Digital Solutions",
      description: "We offer a full spectrum of digital services designed to elevate your brand and accelerate your business growth.",
      cta: {
        title: "Ready to Transform Your Digital Presence?",
        button: "View Our Portfolio",
      },
      items: {
        webDesign: {
          title: "Web Design & Development",
          description: "Custom websites and web applications built with modern technologies and best practices.",
        },
        seo: {
          title: "SEO & Analytics",
          description: "Data-driven SEO strategies and comprehensive analytics to boost your online visibility.",
        },
        socialMedia: {
          title: "Social Media Marketing",
          description: "Strategic social media campaigns that build brand awareness and drive engagement.",
        },
        digitalMarketing: {
          title: "Digital Marketing",
          description: "Comprehensive digital marketing solutions including PPC, content marketing, and email campaigns.",
        },
      },
    },
    portfolio: {
      title: "Featured Projects",
      subtitle: "Showcasing Excellence",
      description: "Explore our portfolio of successful projects that demonstrate our expertise and commitment to delivering exceptional results.",
      categories: {
        all: "All",
        webDevelopment: "Web Development",
        uiUxDesign: "UI/UX Design",
        branding: "Branding",
        socialMedia: "Social Media",
        seo: "SEO",
      },
      cta: {
        viewMore: "View More Projects",
        viewDetails: "View Details",
        clickToView: "Click to view",
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Start Something Amazing",
      description: "Ready to bring your digital vision to life? Let's discuss how we can help you achieve your goals.",
      form: {
        name: {
          label: "Full Name",
          placeholder: "Enter your full name",
        },
        email: {
          label: "Email Address",
          placeholder: "Enter your email address",
        },
        subject: {
          label: "Subject",
          placeholder: "What's this about?",
        },
        message: {
          label: "Message",
          placeholder: "Tell us about your project...",
        },
        submit: "Send Message",
      },
      info: {
        email: "hello@codebutterfly.com",
        phone: "+1 (555) 123-4567",
        address: "123 Digital Street, Tech City, TC 12345",
      },
    },
    footer: {
      description: "Transforming ideas into digital reality with innovative solutions and creative excellence.",
      quickLinks: {
        title: "Quick Links",
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
      },
      services: {
        title: "Services",
        webDesign: "Web Design",
        seo: "SEO & Analytics",
        socialMedia: "Social Media",
        digitalMarketing: "Digital Marketing",
      },
      contact: {
        title: "Contact Info",
        email: "hello@codebutterfly.com",
        phone: "+1 (555) 123-4567",
        address: "123 Digital Street, Tech City",
      },
      copyright: "© 2025 CodeButterfly. All rights reserved.",
    },
    projects: {
      title: "Our Complete Portfolio",
      subtitle: "Showcasing Excellence",
      description: "Explore our comprehensive collection of innovative projects that showcase our expertise, creativity, and commitment to delivering exceptional results.",
      pagination: {
        showing: "Showing",
        of: "of",
        projects: "projects",
        previous: "Previous",
        next: "Next",
        jumpToPage: "Jump to page:",
      },
      filters: {
        all: "All",
        webDevelopment: "Web Development",
        uiUxDesign: "UI/UX Design",
        branding: "Branding",
        socialMedia: "Social Media",
        seo: "SEO",
      },
    },
    projectDetail: {
      backToPortfolio: "Back to Portfolio",
      projectOverview: "Project Overview",
      projectGallery: "Project Gallery",
      challengesAndSolutions: "Challenges & Solutions",
      challenges: "Challenges",
      solutions: "Solutions",
      results: "Results",
      projectDetails: {
        title: "Project Details",
        duration: "Duration:",
        client: "Client:",
        category: "Category:",
      },
      technologiesUsed: "Technologies Used",
      readyToStart: {
        title: "Ready to Start Your Project?",
        description: "Let's discuss how we can bring your vision to life with the same level of excellence and innovation.",
        button: "Get Started",
      },
      exploreMore: {
        title: "Explore More Projects",
        button: "View All Projects",
      },
      notFound: {
        title: "Project Not Found",
        description: "The project you're looking for doesn't exist or has been moved.",
        button: "Back to Portfolio",
      },
    },
    common: {
      loading: "Loading...",
      error: "Something went wrong",
      tryAgain: "Try Again",
      getStarted: "Get Started",
      learnMore: "Learn More",
      viewAll: "View All",
    },
  },
  
  ru: {
    navbar: {
      home: "Главная",
      portfolio: "Портфолио",
      about: "О нас",
      services: "Услуги",
      contact: "Контакты",
    },
    hero: {
      badge: "СТУДИЯ ЦИФРОВЫХ ТЕХНОЛОГИЙ БУДУЩЕГО",
      title: "Цифровая Эволюция",
      subtitle: "Создаем Цифровые Решения, Которые Трансформируют Бизнес",
      description: "Мы специализируемся на создании передовых цифровых решений, которые сочетают эстетическое совершенство с функциональными инновациями. От веб-разработки до цифрового маркетинга - мы воплощаем ваше видение в жизнь.",
      cta: {
        primary: "НАЧАТЬ",
        secondary: "ПОСМОТРЕТЬ РАБОТЫ",
      },
      stats: {
        projects: "Проектов Завершено",
        clients: "Довольных Клиентов",
        experience: "Лет Опыта",
        satisfaction: "Удовлетворенность Клиентов",
      },
      scrollIndicator: "Прокрутите для изучения",
    },
    about: {
      title: "О CodeButterfly",
      subtitle: "Инновации Через Технологии",
      description: "Мы - прогрессивное цифровое агентство, увлеченное созданием исключительных цифровых решений, которые способствуют росту бизнеса и вовлечению пользователей.",
      mission: {
        title: "Наша Миссия",
        description: "Предоставить бизнесу инновационные цифровые решения, которые создают долгосрочное влияние и способствуют значимому росту в цифровом пространстве.",
      },
      vision: {
        title: "Наше Видение",
        description: "Стать ведущим катализатором цифровой трансформации, помогая бизнесу достичь новых высот через передовые технологии и творческое совершенство.",
      },
      values: {
        title: "Наши Ценности",
        description: "Инновации, совершенство и успех клиентов - основа всего, что мы делаем. Мы верим в расширение границ и достижение результатов, превышающих ожидания.",
      },
    },
    services: {
      title: "Наши Услуги",
      subtitle: "Комплексные Цифровые Решения",
      description: "Мы предлагаем полный спектр цифровых услуг, разработанных для повышения вашего бренда и ускорения роста бизнеса.",
      cta: {
        title: "Готовы Трансформировать Ваше Цифровое Присутствие?",
        button: "Посмотреть Портфолио",
      },
      items: {
        webDesign: {
          title: "Веб-Дизайн и Разработка",
          description: "Индивидуальные веб-сайты и веб-приложения, созданные с использованием современных технологий и лучших практик.",
        },
        seo: {
          title: "SEO и Аналитика",
          description: "SEO-стратегии на основе данных и комплексная аналитика для повышения вашей онлайн-видимости.",
        },
        socialMedia: {
          title: "Маркетинг в Социальных Сетях",
          description: "Стратегические кампании в социальных сетях, которые повышают узнаваемость бренда и вовлеченность.",
        },
        digitalMarketing: {
          title: "Цифровой Маркетинг",
          description: "Комплексные решения цифрового маркетинга, включая PPC, контент-маркетинг и email-кампании.",
        },
      },
    },
    portfolio: {
      title: "Избранные Проекты",
      subtitle: "Демонстрируя Совершенство",
      description: "Изучите наше портфолио успешных проектов, которые демонстрируют наш опыт и приверженность достижению исключительных результатов.",
      categories: {
        all: "Все",
        webDevelopment: "Веб-Разработка",
        uiUxDesign: "UI/UX Дизайн",
        branding: "Брендинг",
        socialMedia: "Социальные Сети",
        seo: "SEO",
      },
      cta: {
        viewMore: "Посмотреть Больше Проектов",
        viewDetails: "Подробнее",
        clickToView: "Нажмите для просмотра",
      },
    },
    contact: {
      title: "Свяжитесь с Нами",
      subtitle: "Давайте Начнем Что-то Удивительное",
      description: "Готовы воплотить ваше цифровое видение в жизнь? Давайте обсудим, как мы можем помочь вам достичь ваших целей.",
      form: {
        name: {
          label: "Полное Имя",
          placeholder: "Введите ваше полное имя",
        },
        email: {
          label: "Email Адрес",
          placeholder: "Введите ваш email адрес",
        },
        subject: {
          label: "Тема",
          placeholder: "О чем речь?",
        },
        message: {
          label: "Сообщение",
          placeholder: "Расскажите нам о вашем проекте...",
        },
        submit: "Отправить Сообщение",
      },
      info: {
        email: "hello@codebutterfly.com",
        phone: "+1 (555) 123-4567",
        address: "123 Digital Street, Tech City, TC 12345",
      },
    },
    footer: {
      description: "Превращаем идеи в цифровую реальность с помощью инновационных решений и творческого совершенства.",
      quickLinks: {
        title: "Быстрые Ссылки",
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        portfolio: "Портфолио",
        contact: "Контакты",
      },
      services: {
        title: "Услуги",
        webDesign: "Веб-Дизайн",
        seo: "SEO и Аналитика",
        socialMedia: "Социальные Сети",
        digitalMarketing: "Цифровой Маркетинг",
      },
      contact: {
        title: "Контактная Информация",
        email: "hello@codebutterfly.com",
        phone: "+1 (555) 123-4567",
        address: "123 Digital Street, Tech City",
      },
      copyright: "© 2025 CodeButterfly. Все права защищены.",
    },
    projects: {
      title: "Наше Полное Портфолио",
      subtitle: "Демонстрируя Совершенство",
      description: "Изучите нашу обширную коллекцию инновационных проектов, которые демонстрируют наш опыт, креативность и приверженность достижению исключительных результатов.",
      pagination: {
        showing: "Показано",
        of: "из",
        projects: "проектов",
        previous: "Предыдущая",
        next: "Следующая",
        jumpToPage: "Перейти на страницу:",
      },
      filters: {
        all: "Все",
        webDevelopment: "Веб-Разработка",
        uiUxDesign: "UI/UX Дизайн",
        branding: "Брендинг",
        socialMedia: "Социальные Сети",
        seo: "SEO",
      },
    },
    projectDetail: {
      backToPortfolio: "Назад к Портфолио",
      projectOverview: "Обзор Проекта",
      projectGallery: "Галерея Проекта",
      challengesAndSolutions: "Вызовы и Решения",
      challenges: "Вызовы",
      solutions: "Решения",
      results: "Результаты",
      projectDetails: {
        title: "Детали Проекта",
        duration: "Длительность:",
        client: "Клиент:",
        category: "Категория:",
      },
      technologiesUsed: "Используемые Технологии",
      readyToStart: {
        title: "Готовы Начать Ваш Проект?",
        description: "Давайте обсудим, как мы можем воплотить ваше видение в жизнь с тем же уровнем совершенства и инноваций.",
        button: "Начать",
      },
      exploreMore: {
        title: "Изучить Больше Проектов",
        button: "Посмотреть Все Проекты",
      },
      notFound: {
        title: "Проект Не Найден",
        description: "Проект, который вы ищете, не существует или был перемещен.",
        button: "Назад к Портфолио",
      },
    },
    common: {
      loading: "Загрузка...",
      error: "Что-то пошло не так",
      tryAgain: "Попробовать Снова",
      getStarted: "Начать",
      learnMore: "Узнать Больше",
      viewAll: "Посмотреть Все",
    },
  },
  
  az: {
    navbar: {
      home: "Ana Səhifə",
      portfolio: "Portfolio",
      about: "Haqqımızda",
      services: "Xidmətlər",
      contact: "Əlaqə",
    },
    hero: {
      badge: "GƏLƏCƏYİN RƏQƏMSAL STUDİYASI",
      title: "Rəqəmsal Təkamül",
      subtitle: "Biznesləri Transformasiya Edən Rəqəmsal Təcrübələr Yaradırıq",
      description: "Biz estetik mükəmməlliyi funksional innovasiyalarla birləşdirən qabaqcıl rəqəmsal həllər yaratmaqda ixtisaslaşırıq. Veb inkişafından rəqəmsal marketinqə qədər, sizin görmənizi həyata keçiririk.",
      cta: {
        primary: "BAŞLAYAQ",
        secondary: "İŞLƏRİMİZƏ BAXIN",
      },
      stats: {
        projects: "Tamamlanmış Layihələr",
        clients: "Məmnun Müştərilər",
        experience: "İl Təcrübə",
        satisfaction: "Müştəri Məmnuniyyəti",
      },
      scrollIndicator: "Araşdırmaq üçün sürüşdürün",
    },
    about: {
      title: "CodeButterfly Haqqında",
      subtitle: "Texnologiya Vasitəsilə İnnovasiya",
      description: "Biz biznes artımını və istifadəçi cəlb etməsini təmin edən müstəsna rəqəmsal təcrübələr yaratmaqda ehtirasla məşğul olan irəliyə baxan rəqəmsal agentlikik.",
      mission: {
        title: "Missiyamız",
        description: "Biznesləri rəqəmsal mənzərədə davamlı təsir yaradan və mənalı artım təmin edən innovativ rəqəmsal həllərlə gücləndikmək.",
      },
      vision: {
        title: "Vizyonumuz",
        description: "Rəqəmsal transformasiyanın aparıcı katalizatoru olmaq, bizneslərin qabaqcıl texnologiya və yaradıcı mükəmməllik vasitəsilə yeni yüksəkliklərə çatmasına kömək etmək.",
      },
      values: {
        title: "Dəyərlərimiz",
        description: "İnnovasiya, mükəmməllik və müştəri uğuru etdiyimiz hər şeyin əsasındadır. Biz sərhədləri genişləndirməyə və gözləntiləri aşan nəticələr əldə etməyə inanırıq.",
      },
    },
    services: {
      title: "Xidmətlərimiz",
      subtitle: "Hərtərəfli Rəqəmsal Həllər",
      description: "Brendinizi yüksəltmək və biznes artımınızı sürətləndirmək üçün nəzərdə tutulmuş tam spektrli rəqəmsal xidmətlər təklif edirik.",
      cta: {
        title: "Rəqəmsal Mövcudluğunuzu Transformasiya Etməyə Hazırsınız?",
        button: "Portfoliomoza Baxın",
      },
      items: {
        webDesign: {
          title: "Veb Dizayn və İnkişaf",
          description: "Müasir texnologiyalar və ən yaxşı təcrübələrlə qurulmuş fərdi veb saytlar və veb tətbiqlər.",
        },
        seo: {
          title: "SEO və Analitika",
          description: "Onlayn görünürlüyünüzü artırmaq üçün məlumatlara əsaslanan SEO strategiyaları və hərtərəfli analitika.",
        },
        socialMedia: {
          title: "Sosial Media Marketinq",
          description: "Brend məlumatlılığını artıran və cəlb etməni təmin edən strateji sosial media kampaniyaları.",
        },
        digitalMarketing: {
          title: "Rəqəmsal Marketinq",
          description: "PPC, kontent marketinq və email kampaniyaları daxil olmaqla hərtərəfli rəqəmsal marketinq həlləri.",
        },
      },
    },
    portfolio: {
      title: "Seçilmiş Layihələr",
      subtitle: "Mükəmməlliyi Nümayiş Etdirmək",
      description: "Təcrübəmizi və müstəsna nəticələr əldə etməyə olan bağlılığımızı nümayiş etdirən uğurlu layihələr portfoliomuzla tanış olun.",
      categories: {
        all: "Hamısı",
        webDevelopment: "Veb İnkişaf",
        uiUxDesign: "UI/UX Dizayn",
        branding: "Brendinq",
        socialMedia: "Sosial Media",
        seo: "SEO",
      },
      cta: {
        viewMore: "Daha Çox Layihə Görün",
        viewDetails: "Ətraflı Bax",
        clickToView: "Baxmaq üçün klikləyin",
      },
    },
    contact: {
      title: "Bizimlə Əlaqə Saxlayın",
      subtitle: "Gəlin Heyrətamiz Bir Şey Başlayaq",
      description: "Rəqəmsal görmənizi həyata keçirməyə hazırsınız? Məqsədlərinizə çatmaqda sizə necə kömək edə biləcəyimizi müzakirə edək.",
      form: {
        name: {
          label: "Tam Ad",
          placeholder: "Tam adınızı daxil edin",
        },
        email: {
          label: "Email Ünvanı",
          placeholder: "Email ünvanınızı daxil edin",
        },
        subject: {
          label: "Mövzu",
          placeholder: "Bu nə haqqındadır?",
        },
        message: {
          label: "Mesaj",
          placeholder: "Layihəniz haqqında bizə danışın...",
        },
        submit: "Mesaj Göndər",
      },
      info: {
        email: "hello@codebutterfly.com",
        phone: "+1 (555) 123-4567",
        address: "123 Digital Street, Tech City, TC 12345",
      },
    },
    footer: {
      description: "İdeyaları innovativ həllər və yaradıcı mükəmməllik ilə rəqəmsal reallığa çeviririk.",
      quickLinks: {
        title: "Sürətli Keçidlər",
        home: "Ana Səhifə",
        about: "Haqqımızda",
        services: "Xidmətlər",
        portfolio: "Portfolio",
        contact: "Əlaqə",
      },
      services: {
        title: "Xidmətlər",
        webDesign: "Veb Dizayn",
        seo: "SEO və Analitika",
        socialMedia: "Sosial Media",
        digitalMarketing: "Rəqəmsal Marketinq",
      },
      contact: {
        title: "Əlaqə Məlumatları",
        email: "hello@codebutterfly.com",
        phone: "+1 (555) 123-4567",
        address: "123 Digital Street, Tech City",
      },
      copyright: "© 2025 CodeButterfly. Bütün hüquqlar qorunur.",
    },
    projects: {
      title: "Tam Portfoliomuz",
      subtitle: "Mükəmməlliyi Nümayiş Etdirmək",
      description: "Təcrübəmizi, yaradıcılığımızı və müstəsna nəticələr əldə etməyə olan bağlılığımızı nümayiş etdirən innovativ layihələrin hərtərəfli kolleksiyasını araşdırın.",
      pagination: {
        showing: "Göstərilir",
        of: "dən",
        projects: "layihə",
        previous: "Əvvəlki",
        next: "Növbəti",
        jumpToPage: "Səhifəyə keç:",
      },
      filters: {
        all: "Hamısı",
        webDevelopment: "Veb İnkişaf",
        uiUxDesign: "UI/UX Dizayn",
        branding: "Brendinq",
        socialMedia: "Sosial Media",
        seo: "SEO",
      },
    },
    projectDetail: {
      backToPortfolio: "Portfolioya Qayıt",
      projectOverview: "Layihə Baxışı",
      projectGallery: "Layihə Qalereyası",
      challengesAndSolutions: "Çağırışlar və Həllər",
      challenges: "Çağırışlar",
      solutions: "Həllər",
      results: "Nəticələr",
      projectDetails: {
        title: "Layihə Təfərrüatları",
        duration: "Müddət:",
        client: "Müştəri:",
        category: "Kateqoriya:",
      },
      technologiesUsed: "İstifadə Olunan Texnologiyalar",
      readyToStart: {
        title: "Layihənizi Başlatmağa Hazırsınız?",
        description: "Eyni səviyyədə mükəmməllik və innovasiya ilə görmənizi həyata keçirmək üçün necə kömək edə biləcəyimizi müzakirə edək.",
        button: "Başlayaq",
      },
      exploreMore: {
        title: "Daha Çox Layihə Araşdırın",
        button: "Bütün Layihələri Görün",
      },
      notFound: {
        title: "Layihə Tapılmadı",
        description: "Axtardığınız layihə mövcud deyil və ya köçürülüb.",
        button: "Portfolioya Qayıt",
      },
    },
    common: {
      loading: "Yüklənir...",
      error: "Nəsə yanlış oldu",
      tryAgain: "Yenidən Cəhd Et",
      getStarted: "Başlayaq",
      learnMore: "Daha Çox Öyrən",
      viewAll: "Hamısını Gör",
    },
  },
};
