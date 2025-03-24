import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#0A192F',
          800: '#112240',
          700: '#1A2F4C',
        },
        'blue': {
          primary: '#2563EB',
          secondary: '#60A5FA',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'circuit-pattern': "url('/images/circuit-pattern.png')",
      },
    },
  },
  plugins: [],
}

export default config 