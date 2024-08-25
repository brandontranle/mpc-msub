/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/**/.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      backgroundColor: {
        'default': '#ffffff',
        'primary': '#D92E3C',
        'primaryHover': '#c32936',
        'secondary': '#010101',
        'secondaryHover': '#1a1a1a',
      },
      textColor: {
        'primary': '#010101',
        'secondary': '#ffffff',
        'tertiary': '#737373',
        'hoverTertiary': '#4d4d4d',
        'primary-red': '#D92E3C',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderColor: {
        'primary': '#D92E3C',
        'secondary': '#010101',
      },
    },
  },
  plugins: [],
}

