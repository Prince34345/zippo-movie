/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "theme": "#4bb7d3",
            "Alt-theme":"#f7f6f1"
        },
        fontFamily: {
            "Poppins":['Poppins', 'sans-serif'],
            "Jockey-One": ['Jockey One', "sans-serif"],
            "Josefin-Sans": ['Josefin Sans', 'sans-serif'],
            'Sansita':['Sansita', 'sans-serif'],
        },
        screens: {
            "Mobile" : "350px",
            "3xl": "2000px",
            "rangeOuter":"10000px"
        }
    },
  },
  plugins: [
    require("tailwindcss-textshadow")
  ],
}
