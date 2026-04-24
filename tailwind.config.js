/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // toggle with "dark" class
  content: ["./index.html", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🔥 Brand Colors
        brand: {
          orange: "#F97316",
          orangeLight: "#FB923C",
          green: "#22C55E",
          teal: "#14B8A6",
          blue: "#2563EB",
          cyan: "#38BDF8",
        },

        // 🌙 Dark Theme
        dark: {
          bg: "#1F2828",
          surface: "#0a1919",
          sidebar: "#004c5f",
          border: "#1F2937",
          hover: "#1E293B",

          text: {
            primary: "#E5E7EB",
            secondary: "#9CA3AF",
            muted: "#6B7280",
          },
        },

        // ☀️ Light Theme
        light: {
          bg: "#457a95",
          surface: "#b2d0db",
          sidebar: "#6da1b0",
          border: "#E2E8F0",
          hover: "#E0F2FE",

          text: {
            primary: "#0F172A",
            secondary: "#475569",
            muted: "#94A3B8",
          },
        },
      },

      // 🌈 Gradients
      backgroundImage: {
        "gradient-orange": "linear-gradient(to right, #F97316, #FB923C)",
        "gradient-tech": "linear-gradient(to right, #22C55E, #38BDF8)",
        "gradient-premium": "linear-gradient(to right, #0EA5E9, #6366F1)",
      },
    },
  },
  plugins: [],
};
