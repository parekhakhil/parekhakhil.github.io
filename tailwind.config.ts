import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        slate: {
          DEFAULT: "#2D3436",
          foreground: "#F1F0FB",
        },
        techblue: {
          DEFAULT: "#00A8CC",
          foreground: "#FFFFFF",
        },
        deepPurple: {
          DEFAULT: "#4834D4",
          foreground: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#D6BCFA",
          foreground: "#1A1F2C",
        },
        secondary: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F2FCE2",
          foreground: "#1A1F2C",
        },
        wildflower: {
          purple: "#D6BCFA",
          green: "#F2FCE2",
          yellow: "#FEF7CD",
          dark: "#1A1F2C",
          light: "#F1F0FB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["SF Pro Display", "system-ui", "sans-serif"],
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;