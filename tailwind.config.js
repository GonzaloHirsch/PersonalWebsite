module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    safelist: [
      /list/, /^bg-/, /^hover:bg-/, /^dark:hover:bg-/, /^dark:bg-/, /^font-bold$/, /^text-/, /^hover:text-/, /^dark:hover:text-/, /^dark:text-/, /^mx-/, /^ml-/
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'brand_primary_light': '#124BCF',
      'brand_secondary_light': '#12A9CF',
      'brand_primary_dark': '#DF9A2C',
      'brand_secondary_dark': '#df412c'
    }),
    extend: {
      rotate: {
        "-48": "-48deg",
        "-24": "-24deg",
        "0": "0",
        "24": "24deg",
        "48": "48deg",
      },
      screens: {
        'hover-hover': {'raw': '(hover: hover)'},
      },
      fontFamily: {
        'text': ['Open Sans', 'sans-serif'],
        'highlight': ['Lato', 'sans-serif'] 
      },
      colors: {
        'brand_primary_light': '#124BCF',
        'brand_secondary_light': '#12A9CF',
        'typography_primary_light': '#000000',
        'background_light': '#ffffff',
        'brand_primary_dark': '#DF9A2C',
        'brand_secondary_dark': '#df412c',
        'typography_primary_dark': '#ffffff',
        'background_dark': '#121212',
        'light': '#F7F7F7'
      },
      fontSize: {
        'sm': '0.75rem',
        'base': '1rem',
        'highlight': '5rem',
        'h1': '4rem',
        'h2': '3rem',
        'h3': '2rem',
        'h4': '1.5rem',
        'h5': '1.25rem',
        'highlight-sm': '3.5rem',
        'h1-sm': '3rem',
        'h2-sm': '2.25rem',
        'h3-sm': '1.75rem',
        'h4-sm': '1.5rem',
        'h5-sm': '1.25rem'
      },
      lineHeight: {
        'sm': '1rem',
        'base': '1.35rem',
        'highlight': '5.5rem',
        'h1': '4.25rem',
        'h2': '3.25rem',
        'h3': '2.25rem',
        'h4': '1.75rem',
        'h5': '1.5rem',
        'highlight-sm': '3.75rem',
        'h1-sm': '3.25rem',
        'h2-sm': '2.5rem',
        'h3-sm': '2rem',
        'h4-sm': '1.75rem',
        'h5-sm': '1.5rem',
      },
      padding: {
        'section-x-sm': '1.5rem',
        'section-x': '5rem',
        'section-y-sm': '3rem',
        'section-y': '5rem'
      },
      boxShadow: {
        // One example using shadow-lg -> shadow-lg-invert
        'dark-shadow': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
      },
      translate: {
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '136': '34rem',
        '140': '35rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
        '168': '42rem',
        '184': '46rem',
        '200': '50rem',
        '-100': '-25rem',
        '-104': '-26rem',
        '-108': '-27rem',
        '-112': '-28rem',
        '-116': '-29rem',
        '-120': '-30rem',
        '-124': '-31rem',
        '-128': '-32rem',
        '-132': '-33rem',
        '-136': '-34rem',
        '-140': '-35rem',
        '-144': '-36rem',
        '-148': '-37rem',
        '-152': '-38rem',
        '-168': '-42rem',
        '-184': '-46rem',
        '-200': '-50rem'
      }
    },
  },
  variants: {
    extend: {
      // ...
     fontWeight: ['hover'],
     boxShadow: ['dark'],
    }
  },
  plugins: [],
};
