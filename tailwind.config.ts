import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "slide-left": "slideLeft 2s ease-in-out forwards",
        "slide-right-delay": "slideRight 2s ease-in-out forwards .25s",
        "spin-slow": "spin 23s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
