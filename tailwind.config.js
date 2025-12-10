/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // --- UPDATED FOR STRUCTURED VARIANTS to support hover:bg-primary-dark ---
        'primary': {
          DEFAULT: '#1e3a8a', // Navy Blue
          'dark': '#152b75',  // Slightly darker Navy for hover (calculated)
        },
        'accent': {
          DEFAULT: '#d4af37',   // Gold
          'dark': '#b9952a',   // Slightly darker Gold for hover (calculated)
        },
        background: '#fafafa', // Off-White
        text: '#334155',     // Dark Gray
      },
      fontFamily: {
        english: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};
