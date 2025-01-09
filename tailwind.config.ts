import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Layout/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'nav-slide' :{
          from:{"transform":"translateX(100%)",visibility: 'hidden'},
          to:{"transform":"translateX(0)",visibility: 'visible'},
        }
      },
      animation: {
        'nav-slide': 'nav-slide 0.5s ease-in normal',
        },
    },
  },
  plugins: [],
};
export default config;
