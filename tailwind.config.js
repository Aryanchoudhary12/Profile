import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
      },
      Keyframes:{
        'border-spin':{
          '100%':{
            transform: 'rotate(360deg)',
          }
        }
      },
      animation:{
        'border-spin': 'border-spin 4s linear infinite',
      }
    },
  },
  plugins: [],
};
