/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hudson-blue': '#1E3A8A',
        'hudson-light-blue': '#3B82F6',
        'hudson-cyan': '#06B6D4',
        'hudson-dark': '#1E293B',
      },
    },
  },
  plugins: [],
}

