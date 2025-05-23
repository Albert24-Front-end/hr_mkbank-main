
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: 'var(--ui-primary)',
        secondary: 'var(--ui-secondary)',
        success: 'var(--ui-success)',
        info: 'var(--ui-info)',
        warning: 'var(--ui-warning)',
        error: 'var(--ui-error)',
        neutral: {
          50: 'var(--ui-color-neutral-50)',
          100: 'var(--ui-color-neutral-100)',
          200: 'var(--ui-color-neutral-200)',
          300: 'var(--ui-color-neutral-300)',
          400: 'var(--ui-color-neutral-400)',
          500: 'var(--ui-color-neutral-500)',
          600: 'var(--ui-color-neutral-600)',
          700: 'var(--ui-color-neutral-700)',
          800: 'var(--ui-color-neutral-800)',
          900: 'var(--ui-color-neutral-900)',
          950: 'var(--ui-color-neutral-950)',
        },
      },
    },
  },
  plugins: [],
}