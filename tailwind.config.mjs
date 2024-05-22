/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-main": "var(--background-main)",
        "primary-blue": "var(--primary-blue)",
        "primary-blue-dark": "var(--primary-blue-dark)",
        "primary-blue-light": "var(--primary-blue-light)",
        "text-dark": "var(--text-dark)",
        "text-dark-light": "var(--text-dark-light)",
      },
    },
  },
  plugins: [],
};
