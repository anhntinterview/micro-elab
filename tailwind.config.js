/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/app/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/app/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}