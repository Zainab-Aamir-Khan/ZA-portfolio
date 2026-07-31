/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          // Light Mode Colors
          beige: '#FDFBF7',         // Main Warm Beige background
          card: '#F5F0EB',          // Card/surface beige
          navy: '#0F172A',          // Deep Navy primary text & buttons
          'navy-muted': '#334155',  // Muted body text
          gold: '#D4AF37',          // Soft Gold highlight
          'gold-light': '#FAF4E3',  // Light gold badge/glow
          border: '#E2D8CE',        // Warm border line

          // Dark Mode Colors
          'dark-bg': '#090D16',     // Midnight Navy background
          'dark-card': '#131B2E',   // Dark card surface
          'dark-border': '#242F47', // Subtle dark border
          'dark-gold': '#E5C158',   // Bright Gold accent in dark mode
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}