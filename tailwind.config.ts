import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Botanical Ink" palette — deep emerald paper, gold leaf, blush accent
        ink: "#20241D",
        paper: "#F7F3EA",
        "paper-soft": "#F1ECDF",
        emerald: {
          DEFAULT: "#1F3A2E",
          light: "#2E5245",
          dark: "#142720",
        },
        gold: {
          DEFAULT: "#B8935A",
          light: "#D4B583",
          dark: "#8C6C3D",
        },
        blush: "#E8C4B8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        script: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 1px 1px, rgba(32,36,29,0.05) 1px, transparent 0)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "leaf-sway": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        "leaf-sway": "leaf-sway 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
