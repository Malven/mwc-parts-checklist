/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        card: 'var(--card)',
        'card-border': 'var(--card-border)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        'text-main': 'var(--text-main)',
        'text-muted': 'var(--text-muted)',
        'have-bg': 'var(--have-bg)',
        'have-border': 'var(--have-border)',
        'missing-bg': 'var(--missing-bg)',
        'missing-border': 'var(--missing-border)',
        'badge-have': 'var(--badge-have)',
        'badge-missing': 'var(--badge-missing)',
      },
      animation: {
        'modal-fade-in': 'modalFadeIn 0.2s ease-out',
      },
      keyframes: {
        modalFadeIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.95) translateY(-10px)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

