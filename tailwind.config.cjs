/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kingvoon: ['kingvoon'],
        poppins: ['Poppins'],
        sharp: ['MedievalSharp']
      },
      colors: {
        hero: '#161616',
        button: '#673829',
        buttonHover: '#7E2A13',
        tokenbg: '#161618',
        sliderorange: '#B1783E'

      },
      backgroundImage: {
        aboutbg: "url('/aboutbg.webp')",
        roadmap: "url('/roadmapbg.webp')"
      }
    },
  },
  plugins: [],
}
