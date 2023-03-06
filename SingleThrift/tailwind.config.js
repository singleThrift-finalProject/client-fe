// tailwind.config.js

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './navigators/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A2526',
        secondary: '#EA4C89',
        secondaryLight: '#FFF2F2',
        inputStroke: '#F4F4F4',
      },
    },
  },
  plugins: [],
};
