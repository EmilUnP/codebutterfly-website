/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Layout.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Cyber Color Palette - Lighter & Better
        'cyber-blue': '#4FACFE',
        'cyber-pink': '#FF6B9D', 
        'cyber-purple': '#A855F7',
        'cyber-green': '#10B981',
        'cyber-amber': '#F59E0B',
        'cyber-red': '#EF4444',
        'cyber-orange': '#F97316',
        'cyber-dark': '#1E293B',
        'cyber-darker': '#0F172A',
        'cyber-light': '#334155',
        'cyber-lighter': '#475569',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-delay': 'fadeInUp 0.8s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'spin-slow-reverse': 'spin 3s linear infinite reverse',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float-3d': 'float-3d 8s ease-in-out infinite',
        'float-3d-delayed': 'float-3d-delayed 10s ease-in-out infinite',
        'float-3d-slow': 'float-3d-slow 12s ease-in-out infinite',
        'wing-left': 'wing-left 3s ease-in-out infinite',
        'wing-right': 'wing-right 3s ease-in-out infinite',
        'wing-left-slow': 'wing-left-slow 4s ease-in-out infinite',
        'wing-right-slow': 'wing-right-slow 4s ease-in-out infinite',
        'wing-left-very-slow': 'wing-left-very-slow 5s ease-in-out infinite',
        'wing-right-very-slow': 'wing-right-very-slow 5s ease-in-out infinite',
        'float-3d-fast': 'float-3d-fast 6s ease-in-out infinite',
        'float-3d-vertical': 'float-3d-vertical 9s ease-in-out infinite',
        'wing-left-fast': 'wing-left-fast 2.5s ease-in-out infinite',
        'wing-right-fast': 'wing-right-fast 2.5s ease-in-out infinite',
        'pulse-fast': 'pulse-fast 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(79, 172, 254, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(79, 172, 254, 0.6)' }
        },
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) translateZ(10px) rotate(2deg)' },
          '50%': { transform: 'translateY(-25px) translateZ(20px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) translateZ(10px) rotate(-2deg)' }
        },
        'float-3d-delayed': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-12px) translateZ(8px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-20px) translateZ(15px) rotate(0deg)' },
          '75%': { transform: 'translateY(-12px) translateZ(8px) rotate(1deg)' }
        },
        'float-3d-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) translateZ(5px) rotate(1deg)' },
          '50%': { transform: 'translateY(-15px) translateZ(10px) rotate(0deg)' },
          '75%': { transform: 'translateY(-8px) translateZ(5px) rotate(-1deg)' }
        },
        'wing-left': {
          '0%, 100%': { transform: 'rotate(-45deg) scale(1)' },
          '50%': { transform: 'rotate(-50deg) scale(1.1)' }
        },
        'wing-right': {
          '0%, 100%': { transform: 'rotate(45deg) scale(1)' },
          '50%': { transform: 'rotate(50deg) scale(1.1)' }
        },
        'wing-left-slow': {
          '0%, 100%': { transform: 'rotate(-30deg) scale(1)' },
          '50%': { transform: 'rotate(-35deg) scale(1.05)' }
        },
        'wing-right-slow': {
          '0%, 100%': { transform: 'rotate(30deg) scale(1)' },
          '50%': { transform: 'rotate(35deg) scale(1.05)' }
        },
        'wing-left-very-slow': {
          '0%, 100%': { transform: 'rotate(-20deg) scale(1)' },
          '50%': { transform: 'rotate(-25deg) scale(1.03)' }
        },
        'wing-right-very-slow': {
          '0%, 100%': { transform: 'rotate(20deg) scale(1)' },
          '50%': { transform: 'rotate(25deg) scale(1.03)' }
        },
        'float-3d-fast': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) translateZ(15px) rotate(3deg)' },
          '50%': { transform: 'translateY(-35px) translateZ(25px) rotate(0deg)' },
          '75%': { transform: 'translateY(-20px) translateZ(15px) rotate(-3deg)' }
        },
        'float-3d-vertical': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-25px) translateZ(10px) translateX(5px)' },
          '50%': { transform: 'translateY(-40px) translateZ(20px) translateX(0px)' },
          '75%': { transform: 'translateY(-25px) translateZ(10px) translateX(-5px)' }
        },
        'wing-left-fast': {
          '0%, 100%': { transform: 'rotate(-35deg) scale(1)' },
          '50%': { transform: 'rotate(-40deg) scale(1.15)' }
        },
        'wing-right-fast': {
          '0%, 100%': { transform: 'rotate(35deg) scale(1)' },
          '50%': { transform: 'rotate(40deg) scale(1.15)' }
        },
        'pulse-fast': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' }
        }
      }
    },
  },
  plugins: [],
} 