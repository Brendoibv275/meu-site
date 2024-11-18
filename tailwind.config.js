/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    safelist: [
      'scale-0',
      'scale-100',
      'opacity-0',
      'opacity-100',
      'rotate-45',
      'hidden',
      'animate-bounce'
    ],
    theme: {
      extend: {
        colors: {
          'navy': '#0A192F',
          'navy-light': '#112240',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }