/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // updated path
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Navy Blue
        accent: '#d4af37',  // Gold
        background: '#fafafa', // Off-White
        text: '#334155',    // Dark Gray
      },
      fontFamily: {
        english: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl')(), // include parentheses if needed
  ],
};
