# 🦋 CodeButterfly.art - Next.js Website

A beautiful, modern website built with Next.js 14, TypeScript, and Tailwind CSS. Features a stunning landing page with animations, portfolio showcase, and responsive design.

## ✨ Features

- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Fast Performance**: Optimized with Next.js 14 and static export
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first styling with custom components
- **Framer Motion**: Smooth animations and transitions
- **Portfolio Showcase**: Dynamic project display with filtering
- **Contact Form**: Interactive contact section
- **SEO Optimized**: Meta tags and proper structure

## 🚀 Live Demo

Visit the live website: [https://purescan.info](https://purescan.info)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Deployment**: Static Export for Namecheap Hosting

## 📁 Project Structure

```
ver01/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── projects/          # Projects pages
├── components/            # React components
│   ├── landing/          # Landing page sections
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── utils/                # Helper functions
├── Pages/                # Legacy pages (migrated)
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/codebutterfly-website.git
   cd codebutterfly-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Namecheap Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload contents of `out/` folder to your hosting
   - Include `.htaccess` file for proper routing

3. **Set permissions**
   - Files: 644
   - Folders: 755

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

### Other Platforms

This project is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🎨 Customization

### Colors and Themes

Edit `tailwind.config.js` to customize:
- Color palette
- Typography
- Spacing
- Animations

### Content

Update content in:
- `components/landing/` - Landing page sections
- `app/projects/page.tsx` - Projects data
- `app/page.tsx` - Home page content

### Styling

- Global styles: `app/globals.css`
- Component styles: Inline Tailwind classes
- Custom components: `components/ui/`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Next.js Config
- Static export enabled
- Image optimization disabled for static hosting
- Trailing slashes enabled

### Tailwind Config
- Custom color palette
- Extended animations
- Custom utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide](https://lucide.dev/) - Icons

## 📞 Support

For support or questions:
- Create an issue on GitHub
- Contact: developer@codebutterfly.art

---

Made with ❤️ by CodeButterfly Team 