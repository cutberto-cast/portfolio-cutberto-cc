import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          DEFAULT: 'rgba(255, 255, 255, 0.2)',
          dark: 'rgba(255, 255, 255, 0.05)',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-red': 'glowRed 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'float-3d': 'float-3d 6s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 8s linear infinite',
        'infinite-scroll-skills': 'infinite-scroll 5s linear infinite',
        'slideUp': 'slideUp 0.5s ease forwards',
        'fadeIn': 'fadeIn 0.8s ease forwards',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'float-subtle': 'float-subtle 6s ease-in-out infinite',
        'float-active': 'float-active 3s ease-in-out infinite',
        'falling-float': 'falling-float 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'shadow-grow': 'shadow-grow 1.8s ease-out forwards',
        'speed-line-1': 'speed-line-1 3s linear infinite',
        'speed-line-2': 'speed-line-2 3.5s linear 0.3s infinite',
        'wind-effect': 'wind-effect 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowRed: {
          '0%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0) rotateY(0deg) rotateX(0deg)' },
          '50%': { transform: 'translateY(-15px) rotateY(10deg) rotateX(5deg)' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'pulse-subtle': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(220, 38, 38, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' },
        },
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        'float-active': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-12px) rotate(2deg) scale(1.05)' },
          '50%': { transform: 'translateY(8px) rotate(-2deg) scale(1.03)' },
          '75%': { transform: 'translateY(-5px) rotate(1deg) scale(1.02)' },
        },
        'falling-float': {
          '0%': { transform: 'translateY(-80px) rotate(-8deg) scale(1.1)', opacity: '0' },
          '15%': { transform: 'translateY(30px) rotate(4deg) scale(1.05)', opacity: '0.9' },
          '30%': { transform: 'translateY(-20px) rotate(-3deg) scale(1.03)', opacity: '1' },
          '45%': { transform: 'translateY(10px) rotate(2deg) scale(1.01)' },
          '60%': { transform: 'translateY(-5px) rotate(-1deg)' },
          '75%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: '1' },
        },
        'shadow-grow': {
          '0%': { width: '20px', opacity: '0' },
          '100%': { width: '256px', opacity: '0.3' },
        },
        'speed-line-1': {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '20%': { opacity: '0.4' },
          '100%': { transform: 'translateY(500px)', opacity: '0' },
        },
        'speed-line-2': {
          '0%': { transform: 'translateY(-150px)', opacity: '0' },
          '25%': { opacity: '0.3' },
          '100%': { transform: 'translateY(500px)', opacity: '0' },
        },
        'wind-effect': {
          '0%, 100%': { transform: 'skewX(0deg)' },
          '50%': { transform: 'skewX(1.5deg)' },
        },
      },
      backdropBlur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}

export default config