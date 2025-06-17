module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
        },
        success: {
          DEFAULT: "#059669", // green-600
        },
        accent: {
          DEFAULT: "#64748b", // gray-500
        },
        "surface-0": {
          DEFAULT: "#ffffff",
          dark: "#0f172a",
        },
        "surface-1": {
          DEFAULT: "#f8fafc",
          dark: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
    },
  },
  plugins: [],
}; 