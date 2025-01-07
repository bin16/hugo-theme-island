/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "layouts/**/*.html",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "main": "1fr 2fr 1fr",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
