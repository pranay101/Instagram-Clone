module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'phone-mockup':"url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')"
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
  
}
