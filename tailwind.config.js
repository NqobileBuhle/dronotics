// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path includes all your components
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        secondary: 'var(--secondary-color)', // Use the CSS variable here
      },
    },
  },
  plugins: [],
}

