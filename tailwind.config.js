/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",

  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#3D3F43',
          500: '#050A44',
          600: '#050a3b',
          700: '#06092f',
        },
        gray: {
          100: '#F5F5F5' ,
          200: '#cacbcc' ,
          700: '#565656' ,
          800: '#494949' ,
        },
        home: '#F9F7F4',
        main: '#41AB87',
        lightMain: '#B5DEDD33',
        lightTest: '#B5DEDD',
        orange: {
          100: '#faac3d',
          200: '#FBDFD833',
          300: '#ED775B4C',
          500: '#ED775B',
        },
        secondary: {
          100: '#FCFCFC',
          200: '#F3F2F7',
          400: '#C6C6C6',
          500: '#B3B3B3',
          600: '#777777',
          800: '#565656',
          900: '#494949',
        },

        tertiary: {
          500: '#F3E7D7',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
