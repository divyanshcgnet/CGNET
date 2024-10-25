import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Add DM Sans as the primary font
      },
  
      colors: {
        themeViolet: "#743FE0",
        themeVioletText: "#cbb2fd",
        themeLightViolet: "#9B99FF",
        themeBlackBg: "#1D1E28",
        themeBlackDeep: "#000017",
        themeBlue: "#5E5AFF",
        themeBorderBlue: "#6754F8",
        themeBlack: "#191A21",
        themeBgBlack: "#20222B",
        themeDialogBlack: "#23232E",
        themeGrey: "#3C3C3C",
        themeTextGrey: "#777777",
        themeLightGrey: "#7E7E7E",
        themeNavBlack: "#131722",
        themeBorder: "#FDFDFD",
        themeVideoBgGrey: "#22222C",
        themeTextInputBg: "#070B16",
        themeErr: "#CC2B2D",
        themePositionBg: "#2C2E34",
        themeWebBg: "#0d0d17",
        themeRed: "#C93030",
        themeMintBg: "#14170D",
        themeAiChatSidebarBgDark: "#121520",
        themeAiChatSidebarBgLight: "#1E2029",
      },
      screens: {
        mmd: "992px",
        mmmd: "1400px",
      },
      blur: {
        xs: "2px",
        "2xs": "1px"
      },
      fontSize: {
        "2xs": "0.6rem"
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
      }
    },
  },
  plugins: [],
};
export default config;
