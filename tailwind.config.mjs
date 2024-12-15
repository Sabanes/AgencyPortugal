/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        light: ['Satoshi-Light', 'sans-serif'],
        lightItalic: ['Satoshi-LightItalic', 'sans-serif'],
        regular: ['Satoshi-Regular', 'sans-serif'],
        italic: ['Satoshi-Italic', 'sans-serif'],
        medium: ['Satoshi-Medium', 'sans-serif'],
        mediumItalic: ['Satoshi-MediumItalic', 'sans-serif'],
        bold: ['Satoshi-Bold', 'sans-serif'],
        boldItalic: ['Satoshi-BoldItalic', 'sans-serif'],
        black: ['Satoshi-Black', 'sans-serif'],
        blackItalic: ['Satoshi-BlackItalic', 'sans-serif'],
        variable: ['Satoshi-Variable', 'sans-serif'],
        variableItalic: ['Satoshi-VariableItalic', 'sans-serif'],
      },
      colors: {
        primary: '#305CFD',
        black: '#242424',
        white: '#ffffff',
      },
      "animation": {
        shimmer: "shimmer 5s linear infinite"
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      }
    },
    

    
  },
  plugins: [],
};