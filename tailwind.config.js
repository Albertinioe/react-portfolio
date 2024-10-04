/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: '#202020',
          content: '#181818',
          header: '#0D0D0D',
          ['header-item-hover']: '#191919',
        }
      },
      lineHeight: {
        text: '22px'
      },
      boxShadow: {
        // DEFAULT: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        DEFAULT: '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
      fontSize: {
        base: ['18px', {
          lineHeight: 'auto',
        }],
        xs: ['12px', {
          lineHeight: 'auto',
        }]
      },
      aspectRatio: {
        'stories': '1/2'
      }
    },
  },
  plugins: [],
}

