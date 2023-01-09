/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { animation: {
      'bounce-short': 'bounce 1s ease-in-out 1.5',
      'login-bounce':'bounce 1s ease-in-out .5'
    }},
  },
  plugins: [],
}
