/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        carbon: "#111111",
        gold: "#D4A24C",
        pearl: "#EAEAEA",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 40px rgba(212, 162, 76, 0.18)",
        "gold-soft": "0 10px 50px rgba(212, 162, 76, 0.12)",
      },
    },
  },
  plugins: [],
};
