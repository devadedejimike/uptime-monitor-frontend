/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./lib/**/*.{js,ts}",
],
  theme: {
    extend: {
      colors: {
        brand: {
          'card': "#ecfdf5",
          'background': "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          'primary': "#10b981", // main brand color
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          'text-muted': "hsla(0, 0%, 45%, 1)"
        }
      }
    },
  },
  plugins: [],
}

