/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'PlayfairDisplaySC': ['Playfair Display SC', 'serif'],
        'sen':['Sen', 'sans-serif'],
        'berkishireswash':['Berkshire Swash', 'serif']
      },
    },
  },
  plugins: [],
}
