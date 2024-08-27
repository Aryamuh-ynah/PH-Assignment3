/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/assets/bg.jpg')",
        }
      },
    },
    plugins: [],
  }