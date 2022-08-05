module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
     
        fontFamily:{
          'jost': ['Jost', 'sans-serif'],

        }
      
    },
    plugins: 
    [
      require('@tailwindcss/forms'),
    ],
  }