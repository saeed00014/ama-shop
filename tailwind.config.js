/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        g_Text_White: "#FFF",
        g_Text_Black: "#000",
        g_Background_Black: "#0F0F0F",
        g_Background_Element: "#D9D9D9",
        g_Border_Active: "#B820FF",
        g_Button_Active: "#D9D9D9",
        g_Button_Background: "#C240FF",
        g_Text_Shaded: "#ffffff80",
        g_Border_Shaded: "#626262",
        g_Background_Shaded: "rgb(59, 59, 59)",
        g_Background_White_Shop: "rgb(235, 235, 235)",
        g_Background_Shaded_Shop: "rgb(241, 242, 244)",
        g_Border_Shaded_Shop: "rgb(112, 112, 110)",
      },
      screens: {
        sm: "320px",
        md: "640px",
        lg: "960px",
        xl: "1280px",
        xxl: "1780px",
      },
      fontFamily: {
        iran: ["iran"],
      },
    },
  },
  plugins: [],
};
