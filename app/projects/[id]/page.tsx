import React from 'react';
import { ArrowLeft, Calendar, User, Target, TrendingUp, Sparkles, ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import ButterflyAnimation from '@/components/landing/ButterflyAnimation';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import ImageCarousel from '@/components/ui/ImageCarousel';

// Project data - this should match the data from the main projects page
const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience with seamless checkout and inventory management.',
    fullDescription: 'A comprehensive e-commerce solution built with cutting-edge technologies. This platform features advanced product management, secure payment processing, real-time inventory tracking, and an intuitive admin dashboard. The responsive design ensures optimal user experience across all devices.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    category: 'Web Development',
    color: 'cyber-blue',
    duration: '3 months',
    client: 'TechStart Inc.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
    results: [
      'Increased conversion rate by 35%',
      'Reduced cart abandonment by 28%',
      'Improved page load speed by 40%',
      'Enhanced mobile user experience'
    ],
    challenges: [
      'Complex payment integration requirements',
      'High traffic scalability needs',
      'Real-time inventory synchronization'
    ],
    solutions: [
      'Implemented Stripe with webhook handling',
      'Used Redis for caching and session management',
      'Built real-time updates with Socket.io'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Creative Agency Website',
    description: 'Dynamic portfolio showcase with interactive animations and modern design.',
    fullDescription: 'A stunning website for a creative agency that showcases their portfolio with interactive animations and modern design principles. Features include smooth scrolling, parallax effects, and a dynamic project gallery that highlights their creative work.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'UI/UX Design',
    color: 'cyber-pink',
    duration: '2 months',
    client: 'Creative Studio',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    results: [
      'Improved user engagement by 45%',
      'Reduced bounce rate by 30%',
      'Enhanced visual appeal and brand recognition',
      'Optimized for all device types'
    ],
    challenges: [
      'Complex animation requirements',
      'Performance optimization needs',
      'Cross-browser compatibility'
    ],
    solutions: [
      'Used Framer Motion for smooth animations',
      'Implemented lazy loading and code splitting',
      'Extensive testing across browsers'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Brand Identity Package',
    description: 'Comprehensive branding solution including logo, guidelines, and marketing materials.',
    fullDescription: 'A complete brand identity package that transformed the client\'s visual presence. This project included logo design, brand guidelines, color palette development, typography selection, and comprehensive marketing materials.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    category: 'Branding',
    color: 'cyber-green',
    duration: '1.5 months',
    client: 'StartupXYZ',
    technologies: ['Adobe Creative Suite', 'Brand Guidelines', 'Print Design'],
    results: [
      'Established strong brand recognition',
      'Created consistent visual identity',
      'Improved market positioning',
      'Enhanced customer trust and loyalty'
    ],
    challenges: [
      'Defining unique brand personality',
      'Creating scalable design system',
      'Ensuring brand consistency'
    ],
    solutions: [
      'Conducted extensive brand research',
      'Developed comprehensive style guide',
      'Created adaptable design templates'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    description: 'Strategic social media marketing campaign with engaging content and analytics.',
    fullDescription: 'A comprehensive social media marketing campaign that increased brand awareness and engagement across multiple platforms. The campaign included content creation, community management, influencer partnerships, and detailed performance analytics.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
    category: 'Social Media',
    color: 'cyber-purple',
    duration: '4 months',
    client: 'Fashion Brand',
    technologies: ['Social Media Platforms', 'Analytics Tools', 'Content Creation'],
    results: [
      'Increased followers by 150%',
      'Improved engagement rate by 65%',
      'Generated 200+ qualified leads',
      'Enhanced brand visibility'
    ],
    challenges: [
      'Managing multiple social platforms',
      'Creating engaging content consistently',
      'Measuring campaign effectiveness'
    ],
    solutions: [
      'Implemented content calendar system',
      'Used automation tools for scheduling',
      'Established KPIs and tracking methods'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 5,
    title: 'SEO Optimization Project',
    description: 'Comprehensive search engine optimization to improve organic traffic and rankings.',
    fullDescription: 'A strategic SEO project that significantly improved the client\'s search engine rankings and organic traffic. The project included technical SEO audits, keyword research, content optimization, and ongoing performance monitoring.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'SEO',
    color: 'cyber-amber',
    duration: '6 months',
    client: 'Local Business',
    technologies: ['SEO Tools', 'Google Analytics', 'Content Strategy'],
    results: [
      'Increased organic traffic by 200%',
      'Improved keyword rankings by 40%',
      'Enhanced local search visibility',
      'Reduced bounce rate by 25%'
    ],
    challenges: [
      'Competitive keyword landscape',
      'Technical website issues',
      'Content quality improvement'
    ],
    solutions: [
      'Conducted comprehensive competitor analysis',
      'Fixed technical SEO issues',
      'Implemented content optimization strategy'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 6,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile application with native performance and modern UI.',
    fullDescription: 'A feature-rich mobile application built with React Native that delivers native performance across iOS and Android platforms. The app includes user authentication, real-time data synchronization, and offline functionality.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    category: 'Mobile Development',
    color: 'cyber-red',
    duration: '5 months',
    client: 'Tech Startup',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    results: [
      'Achieved 4.8+ app store rating',
      'Reduced app crash rate by 90%',
      'Improved user retention by 60%',
      'Enhanced app performance'
    ],
    challenges: [
      'Cross-platform compatibility',
      'Performance optimization',
      'Offline functionality requirements'
    ],
    solutions: [
      'Used React Native for cross-platform development',
      'Implemented performance monitoring tools',
      'Built robust offline data handling'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 7,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing business metrics and performance data.',
    fullDescription: 'A powerful data analytics dashboard that provides real-time insights into business performance. The dashboard features interactive charts, customizable reports, and automated data processing capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Data Analytics',
    color: 'cyber-indigo',
    duration: '4 months',
    client: 'Enterprise Corp',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    results: [
      'Improved decision-making speed by 50%',
      'Reduced reporting time by 80%',
      'Enhanced data accuracy and reliability',
      'Increased user adoption by 70%'
    ],
    challenges: [
      'Large dataset processing',
      'Real-time data visualization',
      'User interface complexity'
    ],
    solutions: [
      'Implemented efficient data processing algorithms',
      'Used WebSocket for real-time updates',
      'Designed intuitive user interface'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 8,
    title: 'AI-Powered Chatbot',
    description: 'Intelligent customer service chatbot with natural language processing.',
    fullDescription: 'An advanced AI-powered chatbot that provides intelligent customer service and support. The chatbot uses natural language processing to understand user queries and provide accurate, helpful responses.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    category: 'AI/ML',
    color: 'cyber-teal',
    duration: '3 months',
    client: 'E-commerce Platform',
    technologies: ['Python', 'TensorFlow', 'NLP', 'React'],
    results: [
      'Reduced customer service costs by 40%',
      'Improved response time by 85%',
      'Enhanced customer satisfaction by 30%',
      'Handled 1000+ daily conversations'
    ],
    challenges: [
      'Natural language understanding',
      'Integration with existing systems',
      'Training data quality'
    ],
    solutions: [
      'Implemented advanced NLP models',
      'Built robust API integration',
      'Used high-quality training datasets'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop'
    ]
  }
];

// Generate static params for all projects
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id.toString(),
  }));
}

// Project detail page component
export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = portfolioItems.find(item => item.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-dark text-white relative overflow-hidden">
        {/* Navbar */}
        <Navbar currentPageName="Portfolio" />
        
        {/* Minimalist 3D Butterfly Animation */}
        <ButterflyAnimation />

        {/* Enhanced Background */}
        <div className="absolute inset-0 grid-pattern opacity-3" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-pink/5 opacity-2" />
        
        {/* Subtle Floating Elements */}
        <div className="absolute top-24 left-24 w-2 h-2 bg-cyber-purple/30 rounded-full animate-float opacity-20" />
        <div className="absolute bottom-24 right-24 w-1.5 h-1.5 bg-cyber-pink/30 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />

        {/* Main Content */}
        <div className="text-center pt-24">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-dark text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar currentPageName="Portfolio" />
      
      {/* Minimalist 3D Butterfly Animation */}
      <ButterflyAnimation />

      {/* Enhanced Background */}
      <div className="absolute inset-0 grid-pattern opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-pink/5 opacity-2" />
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-24 left-24 w-2 h-2 bg-cyber-purple/30 rounded-full animate-float opacity-20" />
      <div className="absolute bottom-24 right-24 w-1.5 h-1.5 bg-cyber-pink/30 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10 backdrop-blur-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </Link>
          </div>

          {/* Project Header */}
          <div className="text-center mb-16">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 via-transparent to-cyber-pink/20 blur-3xl opacity-30" />
              
              {/* Category Badge */}
              <div className="mb-6">
                <div className={`px-6 py-3 rounded-full text-sm font-bold bg-${project.color}/20 text-${project.color} border border-${project.color}/30 backdrop-blur-sm`}>
                  {project.category}
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-cyber-blue to-white bg-clip-text text-transparent relative z-10">
                {project.title}
              </h1>
              
              <p className="text-xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed relative z-10 mb-8">
                {project.description}
              </p>
              
              {/* Project Meta */}
              <div className="flex flex-wrap justify-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Description */}
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-cyber-blue" />
                    Project Overview
                  </span>
                </h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Project Gallery */}
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-cyber-pink" />
                    Project Gallery
                  </span>
                </h2>
                
                {/* Gallery Carousel */}
                <ImageCarousel images={project.gallery} title={project.title} />
              </div>

              {/* Challenges & Solutions */}
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-cyber-green" />
                    Challenges & Solutions
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Challenges */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyber-red mb-4">Challenges</h3>
                    <ul className="space-y-3">
                      {project.challenges?.map((challenge: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyber-red rounded-full mt-2 flex-shrink-0" />
                          <span className="text-white/80">{challenge}</span>
                        </li>
                      )) || (
                        <li className="text-white/60 italic">Challenges information not available</li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Solutions */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyber-green mb-4">Solutions</h3>
                    <ul className="space-y-3">
                      {project.solutions?.map((solution: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0" />
                          <span className="text-white/80">{solution}</span>
                        </li>
                      )) || (
                        <li className="text-white/60 italic">Solutions information not available</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-8">
              {/* Project Image */}
              <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">
                <div className="relative rounded-2xl overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <Calendar className="w-5 h-5" />
                    <span>Duration: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <User className="w-5 h-5" />
                    <span>Client: {project.client}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Target className="w-5 h-5" />
                    <span>Category: {project.category}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-2 rounded-lg text-sm font-medium bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-cyber-green" />
                    Results
                  </span>
                </h3>
                <ul className="space-y-3">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/20 rounded-3xl p-6 border border-cyber-blue/30 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
                <p className="text-white/80 text-sm mb-6">
                  Let's discuss how we can bring your vision to life with the same level of excellence and innovation.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 bg-cyber-gradient text-white shadow-2xl shadow-cyber-blue/30 border border-cyber-blue/50"
                >
                  Get Started
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Explore More Projects</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10 backdrop-blur-xl"
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
