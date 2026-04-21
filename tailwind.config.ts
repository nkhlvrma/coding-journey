import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-rose-400", "bg-pink-400", "bg-purple-400",
    "bg-violet-400", "bg-fuchsia-400", "bg-indigo-400",
  ],
  theme: {
    extend: {
      screens: {
        xs: "390px",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Nunito", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      colors: {
        rose: {
          50: "#fff1f5",
          100: "#fde8f0",
          200: "#fad4e5",
          300: "#f7a8c4",
          400: "#f47aaa",
          500: "#e8638a",
          600: "#d4486e",
          700: "#b83358",
          800: "#8a2540",
          900: "#5a1528",
        },
        cream: "#fff9f5",
        blush: "#fde8f0",
        mauve: "#c97b9b",
        "text-rose": "#5a3347",
        "soft-rose": "#8a5566",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-down": "slide-down 0.25s ease",
        "fade-in": "fade-in 0.2s ease",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
