/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors:{
        primaryColor: "#5c3915",
        secondaryColor: "#FFA500",
        textColor: "#fcfcfc"
      }
    },
  },
    plugins: [],
  
}

