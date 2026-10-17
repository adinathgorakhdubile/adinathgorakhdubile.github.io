/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#070B14',
        'obsidian-card': '#0B132B',
        'obsidian-surface': '#0F172A',
        'cyber-blue': '#00D9FF',
        'cyber-cyan': '#0EA5E9',
        'cyber-green': '#10B981',
        'cyber-indigo': '#6366F1',
        'dark-navy': '#070B14',
        'dark-bg': '#0B1220',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'glow': 'glow 2.5s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 217, 255, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(0, 217, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
