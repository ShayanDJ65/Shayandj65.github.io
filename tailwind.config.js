/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  ],
  'scripts': {
    "build":"npx tailwindcss-cli -i src/styles.css -o public/styless.css"},

  theme: {
    extend: {
      colors: {
        'background':"#19191D",
        'aside':'#25252F',
        'cards':'#2C2C36'
      },
      maxHeight: {
        '500':'350px'
      }
    },
  },
  plugins: [],
};
