/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      primary:'Poppins',
      secondary:'Roboto',
    },
    container: {
      padding: {
        DEFAULT: "10px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        body: "#FFFFFF",
        dark: "#0A0826",
        gray: "#6C6C6C",
        grey2: "#231D4F",
        primary: "#3F87F5",
      },
      backgroundImage: {
        banner: "url('assets/image/BannerImg.png')",
      },
    },
  },
  plugins: [],
};
