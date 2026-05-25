import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFFFF",        // white background
          white: "#f7f5f0",     // kept as alias so existing classes don't break
          black: "#111111",     // primary text
          orange: "#ff9e2e",    // primary accent
          "orange-light": "#ffb95c",  // hover states
          teal: "#4dc1c2",      // secondary accent
          "teal-light": "#7dd4d5",    // hover states
          gray: "#666660",      // muted text
          "gray-light": "#999990",    // lighter muted text
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
