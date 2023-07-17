/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        autofit: 'repeat(auto-fit, minmax(248px, 1fr))'
      },
      colors: {
        primary: '#EE6C4D',
        secondary: {
          100: '#1E1F25',
          900: '#131517'
        },
        tertiary: '#0B0F29'
      }
    }
  },
  plugins: []
}
