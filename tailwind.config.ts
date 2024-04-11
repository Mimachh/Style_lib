import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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

  ]
};
export default config;
