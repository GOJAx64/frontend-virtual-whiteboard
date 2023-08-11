module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      height: {
        app_screen: '92.9vh',//'43.9rem',
        card: '43rem',
        accordion: '42rem',
        chat: '38.5rem',
        'fit-content': 'fit-content(20em)',
      }
    },
  },
  plugins: [],
}