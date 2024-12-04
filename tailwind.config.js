/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#643394',
        'pink': '#FFE6E2',
        'yasi': '#d8c9f6',
        'gold': '#F6AB36',
        'gray': '#F0F2F5',
        'gray2': '#EEEEEE'
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        kalamehBlack: "kalameh-black",
        kalamehLight: "kalameh-light",
        stretch: "stretch",
        yekanBakhRegular: "yekanBakh-Regular",
        yekanBakhBold: "yekanBakh-bold",
        Astonia: "Astonia"
      },
      maxWidth: {
        'content': '1248px',
      },
    }
  },
  plugins: [],
}

