/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Project Club: paleta escura compartilhada pelos apps do ecossistema.
        // `white` passa a ser o texto primário da paleta (#F0F5FA) para que text-white/bg-white/* sigam o tema.
        white: '#F0F5FA',
        pc: {
          bg: '#1E1F24',
          'bg-secondary': '#17181C',
          'bg-window': '#131417',
          'bg-deep': '#0E0F12',
          border: '#2E3038',
          'border-secondary': '#3A3D47',
          control: '#343742',
          text: '#F0F5FA',
          'text-secondary': '#A9AEBB',
          accent: '#FACC15',
          'accent-light': '#FDE047',
          'accent-dark': '#CA8A04',
          'accent-text': '#0E0F12',
        },
        hytale: {
          orange: '#FFA845',
          'orange-dark': '#FF6B35',
          dark: '#090909',
          'dark-light': '#0d0d0d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s infinite linear',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 15s ease-in-out infinite',
        'gradient-slow': 'gradient 8s ease infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '25%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.6' },
          '50%': { transform: 'translateY(-10px) translateX(-10px)', opacity: '0.4' },
          '75%': { transform: 'translateY(-30px) translateX(5px)', opacity: '0.5' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
    },
  },
  plugins: [],
}
