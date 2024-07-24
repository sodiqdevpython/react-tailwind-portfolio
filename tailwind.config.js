/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '360': '360deg',
      },
      colors: {
        'Primary': '#007BFF',
        'Secondary': '#6C757D',
        'Success': '#28A745',
        'Danger': '#DC3545',
        'Warning': '#FFC107',
        'Info': '#17A2B8',
        'Light': '#F8F9FA',
        'Dark': '#343A40',

        'primary': '#00040f',
        'secondary': '#00f6ff',
        'white': 'rgba(255, 255, 255, 0.7)',
        'blue': 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      // backgroundImage: {
      //   'gradient-to-r': 'linear-gradient(to right, #355C7D, #6C5B7B, #C06C84)',
      // }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}