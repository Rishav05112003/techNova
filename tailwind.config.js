/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'hero-pattern' : "url('https://c4.wallpaperflare.com/wallpaper/285/78/410/digital-digital-art-artwork-fantasy-art-futuristic-hd-wallpaper-preview.jpg')",
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode:"class"
}