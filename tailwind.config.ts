import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#faf9f7",
          light: "#fafaf8",
          dark: "#ece9e3"
        },
        bg: {
          DEFAULT: "#F5F4F0",
          soft: "#faf9f7",
          card: "#ffffff"
        },
        ink: {
          DEFAULT: "#111111",
          muted: "rgba(17,17,17,0.55)",
          faint: "rgba(17,17,17,0.35)"
        },
        gold: {
          DEFAULT: "#111111",
          light: "rgba(17,17,17,0.45)",
          soft: "rgba(17,17,17,0.04)",
          deep: "#111111",
          warm: "rgba(17,17,17,0.5)"
        },
        line: "rgba(17,17,17,0.07)"
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["IBM Plex Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Courier Prime", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22,22,27,0.04), 0 8px 24px -12px rgba(22,22,27,0.08)",
        card: "0 1px 3px rgba(22,22,27,0.06), 0 16px 40px -20px rgba(22,22,27,0.14)",
        glow: "0 0 0 1px rgba(201,162,39,0.25), 0 18px 50px -12px rgba(201,162,39,0.35)",
        "glow-strong":
          "0 0 0 1px rgba(201,162,39,0.45), 0 30px 80px -10px rgba(201,162,39,0.45)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(251,247,236,0) 0%, rgba(251,247,236,1) 90%)",
        "gold-sheen":
          "linear-gradient(110deg, #c9a227 0%, #e5c15c 45%, #c9a227 90%)"
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "marquee": "marquee 38s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-shift": "gradient-shift 10s ease-in-out infinite",
        "blink": "blink 1.1s steps(1) infinite",
        "shimmer": "shimmer 3s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "word-reveal": "word-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" }
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        },
        shimmer: {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" }
        },
        "word-reveal": {
          "0%": {
            opacity: "0",
            filter: "blur(8px)",
            transform: "translateY(12px)"
          },
          "60%": {
            opacity: "0.85",
            filter: "blur(3px)"
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateY(0)"
          }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.4)", opacity: "0.6" }
        }
      }
    }
  },
  plugins: []
};

export default config;
