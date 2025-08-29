import { PortfolioService } from '@/lib/portfolio-service'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Sparkles, Target, Users, TrendingUp } from 'lucide-react'
import UnifiedNavbar from '@/components/ui/UnifiedNavbar'

interface Props {
  params: { id: string }
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  const portfolioData = PortfolioService.getPortfolioItems('az')
  return portfolioData.map((item: any) => ({
    id: item.id.toString(),
  }))
}

export default function AzerbaijaniPortfolioDetail({ params }: Props) {
  const portfolioData = PortfolioService.getPortfolioItems('az')
  const portfolioItem = PortfolioService.getPortfolioItem('az', parseInt(params.id))
  
  if (!portfolioItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Layihə tapılmadı</h1>
          <Link href="/az/projects" className="text-cyber-blue hover:underline">
            Portfoliaya Qayıt
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker text-white">
      {/* Navigation */}
      <UnifiedNavbar variant="page" />

      {/* Main Content */}
      <div className="pt-8 pb-16 px-6">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto mb-8">
          <Link
            href="/az/projects"
            className="inline-flex items-center gap-2 text-cyber-blue hover:text-cyber-pink transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Portfoliaya Qayıt</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl">
                  <img
                    src={portfolioItem.images[0]}
                    alt={portfolioItem.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-bold bg-${portfolioItem.color}/20 text-${portfolioItem.color} border border-${portfolioItem.color}/30 backdrop-blur-sm`}>
                      {portfolioItem.category}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {portfolioItem.images.slice(1).map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl">
                      <img
                        src={image}
                        alt={`${portfolioItem.title} - Görünüş ${index + 2}`}
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple bg-clip-text text-transparent">
                  {portfolioItem.title}
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  {portfolioItem.fullDescription}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-cyber-green" />
                  <div>
                    <p className="text-sm text-white/60">Müddət</p>
                    <p className="font-semibold text-white">{portfolioItem.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-cyber-blue" />
                  <div>
                    <p className="text-sm text-white/60">Müştəri</p>
                    <p className="font-semibold text-white">{portfolioItem.client}</p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">İstifadə Edilən Texnologiyalar</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioItem.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Çətinliklər</h3>
                  <div className="space-y-2">
                    {portfolioItem.challenges.map((challenge: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyber-red rounded-full mt-2 flex-shrink-0" />
                        <p className="text-white/80 text-sm">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Həll Edilən Problemlər</h3>
                  <div className="space-y-2">
                    {portfolioItem.solutions.map((solution: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0" />
                        <p className="text-white/80 text-sm">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Results */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <Sparkles className="inline w-8 h-8 text-cyber-pink mr-3" />
              Layihə Nəticələri
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioItem.results.map((result: string, index: number) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <TrendingUp className="w-8 h-8 text-cyber-green mx-auto mb-3" />
                  <p className="text-white/90">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Digər Layihələr</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData
              .filter(item => item.id !== portfolioItem.id)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/az/projects/${item.id}`}
                  className="group block bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyber-blue/50 transition-all duration-300 hover:bg-white/10"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-cyber-dark/50 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 CodeButterfly. Bütün hüquqlar qorunur.
          </p>
        </div>
      </footer>
    </div>
  )
}
