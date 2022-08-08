/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        70: "70px",
        100: "100px",
        1170: "1170px",
      },
      height: {
        34: "34px",
        60: "60px",
        70: "70px",
        650: "650px",
      },
      minWidth: {
        
      },
      fontSize: {
        small: ['12px', '14px'],
        body: ['16px', '26px'],
        heading: ['40px', '40px'],
      },
      colors: {
        primaryColor: "#F4E041",
        disabledBtn: "#B4B4B4",
        errorColor: "#CB3D40",
        hoverColor: "#FFE302",
        smallTextColor: "#7E7E7E", 
        borderInput: "#D0CFCF",
        borderRadioBtn: "#00BDD3",
        fromGradient: "rgba(0, 0, 0, 0.2)",
        toGradient: "rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "field-background": "url('./img/back.jpeg')"
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "2560px",
      },
    },
  },
  plugins: [],
}
