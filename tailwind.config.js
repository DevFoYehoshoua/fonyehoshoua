/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'foni-bg': '#ff8572',
        'foni-bg2': '#cc2f01',
        'foni-white': '#f4eeeb',
        'foni-green': '#20591d',
        'foni-orange': '#fda715'
      },

      backgroundImage: {
        'photo-1': "url('/src/assets/photos/photo-1.jpg')",
        'photo-2': "url('/src/assets/photos/photo-2.jpg')",
        'photo-3': "url('/src/assets/photos/photo-3.jpg')",
        'photo-4': "url('/src/assets/photos/photo-4.jpg')",
        'photo-5': "url('/src/assets/photos/photo-5.jpg')",
        'photo-6': "url('/src/assets/photos/photo-6.jpg')",
        'logo-nobg': "url('/src/assets/logo-nobg.png')"
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('firefox', '.firefox &')
    }
  ]
}
