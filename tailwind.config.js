/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-deep': '#0D2214',
        'forest-mid': '#1B3B22',
        'olive-accent': '#8AA87B',
        'earth-brown': '#4E3B31',
        'beige-warm': '#F7F4EF',
        'soft-white': '#FCFAF7',
      },
      fontFamily: {
        serif: ['"Outfit"', '"Inter"', 'sans-serif'],
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}


