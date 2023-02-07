/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        AutoHuntDark: {

          // "primary": "#4D2DCA",
          "primary": "#892CDC",
          "blackish": "#0B0E1B",

          "secondary": "#828DF8",

          "accent": "#C996CC",
          "ripeYellow": "#fca311",

          "neutral": "#28283C",

          "base-100": "#0B0E1B",
          "base-20": "#fffe",

          "info": "#0CA6E9",

          "success": "#2BD4BD",

          "warning": "#F4C152",

          "error": "#FB6F84",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'advertiseBg': "url('/src/Assets/Images/advertise bg.png')",
        'statesBG': "url('/src/Assets/Images/car-g94f007c11_1920.jpg')",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'ping': 'ping 2s cubic-bezier(0.81, 0.47, 0.53, 1.34) infinite',
        beat: 'beat 1s ease-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
        }

      },
    },
  },
  plugins: [require("daisyui")],
}
