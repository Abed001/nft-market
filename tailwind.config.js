/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      kulimpark: 'kulimpark , sans-serif',
      Shrikhand:'Shrikhand , sans-serif'
    },

    fontWeight: {
      light: 300,
      bold: 600,
      extrabold: 700,
    },
    colors: {
      purple: '#6D37ff',
      blackc: '#0C0C0D',
      cyan: '#50FFAF',
      yellow: '#FFE391',
      whitecolor: '#ADABAB',
      white: '#fff',
      pink: '#f097b2',

    },
    extend: {

    },
  },
  plugins: [],
}