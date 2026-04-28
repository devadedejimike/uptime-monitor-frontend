/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./lib/**/*.{js,ts}",
],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        brand: {
          background: 'hsla(var(--color-bg), <alpha-value>)',
          primary: 'hsla(var(--color-primary), <alpha-value>)',
          border: 'hsla(var(--color-border), <alpha-value>)',
          // Text specific colors
          heading: 'hsla(var(--color-text-heading), <alpha-value>)',
          body: 'hsla(var(--color-text-body), <alpha-value>)',
          muted: 'hsla(var(--color-text-muted), <alpha-value>)',
          inv: 'hsla(var(--color-text-inv), <alpha-value>)', // Inverted text for buttons
        },
      },
    },
  },
  plugins: [],
}

