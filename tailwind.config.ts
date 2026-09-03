import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          500: "#1677d2",
          600: "#0f63b5",
          700: "#0b4f91",
          900: "#092f55"
        }
      }
    }
  },
  plugins: []
};

export default config;
