import { portfolioData, type Language } from './static-i18n';

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  images: string[];
  technologies: string[];
  color: string;
  duration: string;
  client: string;
  challenges: string[];
  solutions: string[];
}

export interface PortfolioCarouselItem {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  color: string;
}

export class PortfolioService {
  // Get all portfolio items for a specific language
  static getPortfolioItems(language: Language): PortfolioItem[] {
    return portfolioData[language] || portfolioData.en;
  }

  // Get a specific portfolio item by ID and language
  static getPortfolioItem(language: Language, id: number): PortfolioItem | null {
    const items = this.getPortfolioItems(language);
    return items.find(item => item.id === id) || null;
  }

  // Get portfolio items for carousel (home page)
  static getCarouselItems(language: Language): PortfolioCarouselItem[] {
    const items = this.getPortfolioItems(language);
    
    return items.slice(0, 5).map(item => ({
      id: item.id,
      title: item.title,
      category: item.category,
      description: item.description,
      technologies: item.technologies,
      imageUrl: item.image,
      link: this.createProjectLink(language, item.id),
      color: item.color
    }));
  }

  // Create language-aware project links
  static createProjectLink(language: Language, projectId: number): string {
    if (language === 'en') {
      return `/en/projects/${projectId}`;
    }
    return `/${language}/projects/${projectId}`;
  }

  // Get portfolio items by category
  static getPortfolioItemsByCategory(language: Language, category: string): PortfolioItem[] {
    const items = this.getPortfolioItems(language);
    if (category === 'all') return items;
    return items.filter(item => item.category === category);
  }

  // Get all unique categories
  static getCategories(language: Language): string[] {
    const items = this.getPortfolioItems(language);
    const categories = [...new Set(items.map(item => item.category))];
    return ['all', ...categories];
  }
}
