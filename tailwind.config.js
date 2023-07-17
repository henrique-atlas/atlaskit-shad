/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "atlas-blue-500": '#0559FA', // Primary
        "atlas-blue-900": '#06195E',
        "atlas-blue-100": '#D2DFFF',
        "atlas-purple-500": '#5827E3',
        "atlas-purple-100": '#E6D2FF',
        "atlas-magenta-500": '#BA33CA',
        "atlas-magenta-900": '#48114F',
        "atlas-magenta-100": '#F2C1F8',
        "atlas-coral-500": '#FF59FA', // Secondary
        "atlas-coral-300": '#FF8F77',
        "atlas-coral-100": '#FFC6C5',
        "atlas-orange-500": '#FF782C',
        "atlas-orange-300": '#F6B942',
        "atlas-orange-100": '#F6D991',
        "atlas-gray-900": '#160629', // Neutral
        "atlas-gray-300": '#E9E9E9',
        "atlas-gray-100": '#F8F8F8',
        "atlas-lime-green": '#2FB652', // Accent
        "atlas-forest-green": '#00765C',
        "atlas-crimson": '#CC0017',
        "atlas-maui": '#2C9CB5',
        "atlas-ember": '#E2651E',
        "atlas-red": '#FF002B',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}