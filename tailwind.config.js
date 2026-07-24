/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0A0913",
        surface: "#15121F",
        "surface-2": "#1C1830",
        "surface-3": "#251F3D",
        border: "#2A2540",
        accent: "#B24BF3",
        "accent-2": "#6C4CF3",
        signal: "#7CFFC4",
        ink: "#F2EFFB",
        muted: "#9B92B4",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(135deg, #6C4CF3 0%, #B24BF3 100%)",
        "grad-radial": "radial-gradient(circle at 50% 0%, rgba(108,76,243,0.25), transparent 60%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(12px,-10px)" },
        },
        pulseLine: {
          "0%,100%": { opacity: 0.25 },
          "50%": { opacity: 0.9 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        pulseLine: "pulseLine 3s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
