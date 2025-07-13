/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        zinc: {
          950: '#09090b',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  safelist: [
    // Keep essential classes that might be dynamically generated
    'animate-pulse',
    'animate-spin',
    'blur-xs',
    'backdrop-blur-xs',
  ],
  // Optimize for mobile performance
  experimental: {
    optimizeUniversalDefaults: true,
  },
}
