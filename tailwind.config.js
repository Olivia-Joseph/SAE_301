/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "hsl(var(--black))",
        grey: "hsl(var(--grey))",
        red: "hsl(var(--red))",
        blue: "hsl(var(--blue))",
        "light-grey": "hsl(var(--light-grey))",
      },

      fontWeight: {
        light: "var(--light)",
        medium: "var(--bold)",
        semibold: "var(--semibold)",
      },

      fontFamily: {
        Oswald: "var(--ff-oswald)",
      },

      fontSize: {
        petit: "var(--petit)",
        moyen: "var(--moyen)",
        grd: "var(--grd)",
        grd2: "var(--grd2)",
        grd3: "var(--grd3)",
        grd4: "var(--grd4)",
      },
    },
  },
  plugins: [],
}