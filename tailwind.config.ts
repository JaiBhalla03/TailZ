import { Caveat } from "next/font/google";
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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cedarville: ['Cedarville Cursive', 'serif'],
        poppins: ["Poppins", "serif"],
        caveat: ["Caveat", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
