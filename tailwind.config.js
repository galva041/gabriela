/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'powder-blue': '#ACB5CA',
        'gradi-yellow': '#FFF8D6',
        'off-white': '#FFFDF5',
        'yellow': '#FFE0B0',
        'ghost-white': '#E1E4EC',
        'periwinkle': '#C3C9D9',
        'black': '#262323',
        'gun-metal': '#323743',
        'glow-gray': '#565D70',
        'dark-gray': '#3E4454',
        'med-gray': '#626C84',
        'footer-dark': '#7E88A0',
        'footer-light': '#485064',
        'white': '#EFF0F3',
        },
      fontFamily: {
        worksans: ['Work Sans', 'ui-sans-serif', 'system-ui'],
        karla: ['Karla', 'ui-sans-serif', 'system-ui'],
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
