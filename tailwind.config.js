/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      // 'prim':'#F4E7DE',
      // 'sec':'#6D1C2B',
      // 'hglt':'#f1ded1'

      // 'prim':'#dae3e8',
      // 'sec':'#395261',
      // 'hglt':'#c1d7e3'
      colors:{
        'prim':'#FFF5F5',
        'sec':'#A8667A',
        'sec-der':'#754151',
        'hglt':'#FFE4E5'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
