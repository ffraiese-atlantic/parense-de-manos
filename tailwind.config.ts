import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepPurple: "var(--deepPurple)",
        purple: "var(--purple)",
        inactiveGray: "var(--inactiveGray)",
        unvotedGray: "var(--unvotedGray)",
      },
      fontFamily: {
        sans: ['"Bai Jamjuree"', "sans-serif"],
        michroma: ['"Michroma"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        screens: {
          "3xs": "350px",
          "2xs": "400px",
          xs: "500px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "3xl": "1920px",
        },
      },
      screens: {
        "3xs": "350px",
        "2xs": "400px",
        xs: "500px",
        "3xl": "1920px",
      },
      fontSize: {
        "2xs": "10px",
      },
      lineHeight: {
        "2xs": "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
