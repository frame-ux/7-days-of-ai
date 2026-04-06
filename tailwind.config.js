/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0f',
          light: '#12121a',
          lighter: '#1a1a2e',
        },
        accent: {
          cyan: '#00f0ff',
          purple: '#a855f7',
          amber: '#f59e0b',
          rose: '#f43f5e',
          emerald: '#10b981',
          blue: '#3b82f6',
          orange: '#f97316',
        },
      },
    },
  },
  plugins: [],
}
