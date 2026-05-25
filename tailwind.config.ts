import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0a0a0a',
        'luxury-brown': '#2c2522',
        'luxury-gold': '#d4af37',
        'luxury-cream': '#f5f0e6',
        'luxury-dark-green': '#1a2f1a',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;