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
        app_screen: '92vh',
        card: '40rem',
        accordion: '83vh',
        chat: '90vh',
        settings_page: '77vh',
        activities_page: '88vh',
        standard_content: '83vh',
        'fit-content': 'fit-content(20em)',
      }
    },
  },
  plugins: [],
}