module.exports = {
  content: [
    './index.html',              
    './src/**/*.{html,js,scss}'   
  ],
  theme: {
    extend: { fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      'xs': '390px', 
    },
  },
  },
  plugins: [],
};
