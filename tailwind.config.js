/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['system-ui', 'sans-serif'],
    },
    fontSize: {
      'msm': ['14px', '20px'],
      'sm': ['16px', '25px'],
      'mmd': ['25px', '30px'],
      'md': ['30px', '40px'],
      'mlg': ['35px', '40px'],
      'lg': ['45px', '50px'],
    }
  },
  plugins: [],
};
