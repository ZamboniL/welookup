/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        '5xl': '970px',
        '6xl': '1170px'
      },
      colors: {
        gray: {
          400: '#808080'
        },
        primary: {
          200: '#EBE8FF',
          300: '#8B83BE',
          400: '#6A30F1',
          500: '#5F24DD',
          600: '#271657',
          700: '#19054F'
        }
      }
    }
  },
  plugins: []
};
