/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
        "primary":"#222222",
        "Lavender":"#843ac9",
        "back":"#843AC9",
        "grey":"#D3D3D3",
        "darkgrey":"#3b3b3b"
      }
    },
  },
  plugins: [],
}

