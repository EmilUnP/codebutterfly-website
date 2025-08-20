import React from 'react';
import { ArrowLeft, Calendar, User, Target, TrendingUp, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ButterflyAnimation from '@/components/landing/ButterflyAnimation';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import ImageCarousel from '@/components/ui/ImageCarousel';
import { useT } from '@/lib/i18n-context';

// Project data - this should match the data from the main projects page
const portfolioItems = [
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
    results: ["300% increase in online sales", "50% reduction in cart abandonment", "99.9% uptime achieved"],
    challenges: ["Complex inventory management system", "High-performance product search", "Secure payment integration"],
    solutions: ["Built custom inventory tracking with real-time updates", "Implemented Elasticsearch for fast search", "Integrated Stripe with custom fraud detection"],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand refresh for a sustainable fashion startup.",
    fullDescription: "Comprehensive brand identity redesign for an eco-friendly fashion startup. The project included logo design, brand guidelines, packaging design, and marketing materials that reflect the company's commitment to sustainability.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
    technologies: ["Illustrator", "Figma", "After Effects"],
    color: "cyber-pink",
    duration: "2 months",
    client: "EcoStyle Boutique",
    results: ["40% increase in brand recognition", "25% boost in customer loyalty", "Featured in design magazines"],
    challenges: ["Balancing sustainability with modern aesthetics", "Creating versatile brand elements", "Ensuring brand consistency across all touchpoints"],
    solutions: ["Developed eco-friendly color palette and materials", "Created modular design system", "Established comprehensive brand guidelines"],
    gallery: [
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "Instagram campaign that increased engagement by 300% in 3 months.",
    fullDescription: "Strategic social media campaign for a fitness brand focusing on community building and user-generated content. Included content strategy, influencer partnerships, and paid advertising campaigns across multiple platforms.",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
    technologies: ["Adobe Suite", "Analytics", "Content Strategy"],
    color: "cyber-purple",
    duration: "6 months",
    client: "FitLife Gym",
    results: ["300% engagement increase", "150% follower growth", "500% ROI on ad spend"],
    challenges: ["Building authentic community engagement", "Managing multiple influencer partnerships", "Measuring campaign effectiveness"],
    solutions: ["Created user-generated content challenges", "Established influencer collaboration framework", "Implemented advanced analytics tracking"],
    gallery: [
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Mobile App UI/UX",
    description: "Intuitive fitness app design focused on user motivation and progress tracking.",
    fullDescription: "Complete UX/UI design for a fitness tracking mobile application. Conducted user research, created wireframes, prototypes, and final designs. The app focuses on gamification and social features to keep users motivated.",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    technologies: ["Figma", "Principle", "React Native"],
    color: "cyber-green",
    duration: "3 months",
    client: "HealthTrack Inc.",
    results: ["4.8/5 app store rating", "90% user retention rate", "Featured app of the day"],
    challenges: ["Designing for multiple fitness levels", "Creating engaging gamification elements", "Ensuring accessibility compliance"],
    solutions: ["Developed adaptive UI system", "Implemented reward-based motivation system", "Conducted accessibility audits and improvements"],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 5,
    title: "SEO Optimization",
    description: "Complete SEO overhaul resulting in 250% increase in organic traffic.",
    fullDescription: "Comprehensive SEO audit and optimization for a B2B software company. Included technical SEO improvements, content optimization, link building strategy, and ongoing performance monitoring.",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Google Analytics", "SEMrush", "Technical SEO"],
    color: "cyber-amber",
    duration: "8 months",
    client: "TechSolutions Pro",
    results: ["250% organic traffic increase", "First page rankings for 50+ keywords", "Lead generation up 180%"],
    challenges: ["Technical SEO issues on legacy platform", "Competitive keyword landscape", "Content optimization for B2B audience"],
    solutions: ["Implemented modern technical SEO framework", "Developed competitive keyword strategy", "Created targeted B2B content strategy"],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Corporate Website",
    description: "Professional website for a consulting firm with integrated CRM system.",
    fullDescription: "Modern corporate website with custom CRM integration for a management consulting firm. Features include client portal, document management, appointment scheduling, and automated email workflows.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind", "CMS"],
    color: "cyber-blue",
    duration: "5 months",
    client: "Strategic Advisors Group",
    results: ["60% faster page load times", "45% increase in lead conversion", "Streamlined client onboarding"],
    challenges: ["Complex CRM integration requirements", "Ensuring data security compliance", "Creating intuitive client portal"],
    solutions: ["Built custom CRM API integration", "Implemented enterprise-grade security", "Designed user-centered portal interface"],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 7,
    title: "Restaurant App Design",
    description: "Food delivery app with intuitive ordering and real-time tracking.",
    fullDescription: "Complete mobile app design for a local restaurant chain's food delivery service. Features include menu browsing, customization options, real-time order tracking, and loyalty program integration.",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
    technologies: ["Sketch", "InVision", "React Native"],
    color: "cyber-red",
    duration: "3 months",
    client: "Bistro Chain",
    results: ["40% increase in mobile orders", "25% improvement in order accuracy", "5-star user ratings"],
    challenges: ["Complex menu customization system", "Real-time order tracking", "Loyalty program integration"],
    solutions: ["Designed intuitive customization interface", "Created real-time tracking system", "Integrated seamless loyalty features"],
    gallery: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 8,
    title: "Marketing Campaign",
    description: "Multi-channel digital marketing campaign for product launch.",
    fullDescription: "Comprehensive digital marketing campaign for a tech startup's product launch. Included social media advertising, Google Ads, email marketing, content creation, and influencer partnerships.",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    technologies: ["Google Ads", "Facebook Ads", "Mailchimp"],
    color: "cyber-orange",
    duration: "4 months",
    client: "InnovateTech",
    results: ["500% increase in brand awareness", "200% boost in sign-ups", "150% ROI achieved"],
    challenges: ["Launching unknown brand in competitive market", "Coordinating multiple marketing channels", "Measuring campaign attribution"],
    solutions: ["Developed unique brand positioning strategy", "Created integrated marketing framework", "Implemented advanced attribution modeling"],
    gallery: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop"
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
  const t = useT();
  const projectId = parseInt(params.id);
  const project = portfolioItems.find(item => item.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t.projectDetail.notFound.title}</h1>
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-medium bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.projectDetail.notFound.button}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker text-white relative overflow-hidden">
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
              {t.projectDetail.backToPortfolio}
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
                    {t.projectDetail.projectOverview}
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
                    {t.projectDetail.projectGallery}
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
                    {t.projectDetail.challengesAndSolutions}
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Challenges */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyber-red mb-4">{t.projectDetail.challenges}</h3>
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
                    <h3 className="text-xl font-semibold text-cyber-green mb-4">{t.projectDetail.solutions}</h3>
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
                
                <h3 className="text-xl font-bold text-white mb-4">{t.projectDetail.projectDetails.title}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <Calendar className="w-5 h-5" />
                    <span>{t.projectDetail.projectDetails.duration} {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <User className="w-5 h-5" />
                    <span>{t.projectDetail.projectDetails.client} {project.client}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Target className="w-5 h-5" />
                    <span>{t.projectDetail.projectDetails.category} {project.category}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-4">{t.projectDetail.technologiesUsed}</h3>
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
                    {t.projectDetail.results}
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
                <h3 className="text-xl font-bold text-white mb-4">{t.projectDetail.readyToStart.title}</h3>
                <p className="text-white/80 text-sm mb-6">
                  {t.projectDetail.readyToStart.description}
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 bg-cyber-gradient text-white shadow-2xl shadow-cyber-blue/30 border border-cyber-blue/50"
                >
                  {t.projectDetail.readyToStart.button}
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">{t.projectDetail.exploreMore.title}</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10 backdrop-blur-xl"
            >
              {t.projectDetail.exploreMore.button}
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
