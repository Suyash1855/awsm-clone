/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "412px",
      sm: "660px", // Small devices (e.g., phones)
      md: "768px", // Medium devices (e.g., tablets)
      lmd: "976px",
      lmd2: "1086px",
      lg: "1165px", // Large devices (e.g., laptops)
      xl: "1280px", // Extra-large devices (e.g., desktops)
      "2xl": "1536px",

      // Extra-large devices (e.g., desktops)
      ml: "1260px", // 2XL devices (e.g., large desktops)
      // Add more custom breakpoints as needed
    },
    extend: {
      translate: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "10rem", // This value should match the distance you want the div to move
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
