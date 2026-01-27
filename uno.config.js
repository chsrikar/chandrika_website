import { defineConfig, presetUno, presetAttributify, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:300,400,500,600,700',
        heading: 'Poppins:400,500,600,700,800',
      },
    }),
  ],
  theme: {
    colors: {
      gold: '#D4AF37',
      goldLight: '#E8C960',
      goldDark: '#B8962D',
      black: '#000000',
      darkBg: '#0A0A0A',
      darkCard: '#111111',
      white: '#f5f5f5',
      gray: {
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      }
    },
  },
  shortcuts: {
    'btn-primary': 'bg-gold text-black font-semibold px-6 py-3 rounded-lg hover:bg-goldLight transition-all duration-300 cursor-pointer',
    'btn-secondary': 'border border-gold text-gold px-6 py-3 rounded-lg hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer',
    'card': 'bg-darkCard border border-gray-800 rounded-xl p-6',
    'card-gold': 'bg-darkCard border border-gold/30 rounded-xl p-6 hover:border-gold transition-all duration-300',
    'gold-text': 'text-gold',
    'gold-glow': 'shadow-[0_0_20px_rgba(212,175,55,0.3)]',
    'section-padding': 'py-20 md:py-32 px-4 md:px-8',
    'container-main': 'max-w-7xl mx-auto',
  },
  rules: [
    ['gold-gradient', { 'background': 'linear-gradient(135deg, #D4AF37 0%, #E8C960 50%, #D4AF37 100%)' }],
    ['text-gradient-gold', { 
      'background': 'linear-gradient(135deg, #D4AF37, #E8C960)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'background-clip': 'text',
    }],
  ],
})
