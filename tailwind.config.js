/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        '6xl': '1170px'
      },
      colors: {
        primary: {
          200: '#EBE8FF',
          300: '#9E88FD',
          400: '#6A30F1',
          500: '#5F24DD',
          600: '#270E67',
          700: '#19054F'
        }
      }
    }
  },
  plugins: []
};
