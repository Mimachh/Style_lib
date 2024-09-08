import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

const rotateX = plugin(function ({ addUtilities }: any) {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
    '.rotate-x-180': {
      transform: 'rotateX(180deg)',
    },
    '.rotate-x-270': {
      transform: 'rotateX(270deg)',
    },
  });
})

const rotateY = plugin(function ({ addUtilities }: any) {
  addUtilities({
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.rotate-y-270': {
      transform: 'rotateY(270deg)',
    },
  });
})

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'garde': ['Avant Garde Book BT', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'radial-gradient-slider2': 'radial-gradient(#fff3, transparent 50%)',
      },
      gridTemplateColumns: {
        '130px': 'repeat(2, 130px)',
      },
      gridTemplateRows: {
        '40px': '40px',
      },
      translate: {
        '50': '50px',
        '0': '0px',
      },
      blur: {
        '20': '20px',
        '0': '0px',
      },
      opacity: {
        '0': '0',
        '1': '1',
      },
      animation: {
        'showContent': 'showContent 0.5s 1s linear 1 forwards',
        'showImage': 'showImage 0.5s linear 1 forwards',
        'showThumbnail': 'showThumbnail 0.5s linear 1 forwards',
        'effectNext': 'effectNext .5s linear 1 forwards',
        'runningTime': 'runningTime 3s linear 1 forwards',
        'outFrame': 'outFrame 0.5s linear 1 forwards',
        'contentOut': 'contentOut 1.5s linear 1 forwards',
        'circleRotate': 'circleRotate 20s linear infinite',
        'border-1-spin': 'border-1-spin 7s linear infinite',
      },
      keyframes: {
        showContent: {
          to: {
            transform: 'translateY(0px)',
            filter: 'blur(0px)',
            opacity: '1',
          },
        },
        showImage: {
          to: {
            bottom: '0',
            left: '0',
            width: '100%',
            height: '100%',
            borderRadius: '0',
          },
        },
        showThumbnail: {
          from: {
            width: "0%",
            opacity: "0",
          }
        },
        effectNext: {
          from: {
            transform: 'translateX(150px)',
          }
        },
        runningTime: {
          from: {
            width: '100%',
          },
          to: {
            width: '0%',
          }
        },
        outFrame: {
          to: {
            width: '150px',
            height: '220px',
            bottom: '50px',
            left: '50%',
            borderRadius: '20px',
          }
        },
        contentOut: {
          to: {
            transform: 'translateY(-150px)',
            filter: 'blur(20px)',
            opacity: '0',
          }
        },
        circleRotate: {
          to: {
              transform: 'translate(-50%, -50%) rotate(calc(var(--rotate) + 360deg))',
          }
        },
        'border-1-spin': {
          '100%': {
            transform: 'rotate(-360deg)'
          }
        }
      },
      rotate: {
        '45': '45deg',
      },
      width: {
        'radius-slider2': 'calc(var(--radius) * 2)',
      },
      aspectRatio: {
        card1: '0.71'
      },
      borderRadius: {
        32: "2rem"
      }
    },
    
  },
  plugins: [
    rotateX,
    rotateY
  ]
};
export default config;
