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
        },
        'pop-ele':{
          from:{scale:'0.5',opacity:'0'},
          to:{scale:'1',opacity:'1'},
        },
      },
      animation: {
        'nav-slide': 'nav-slide 0.5s ease-in-out',
        'pop-ele': 'pop-ele 0.5s ease-in-out normal',
        },
    },
  },
  plugins: [],
};
export default config;
