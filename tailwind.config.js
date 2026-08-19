/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: 'var(--luxury-bg)',
          card: 'var(--luxury-card)',
          cardHover: 'var(--luxury-card-hover)',
          gold: 'var(--luxury-gold)',
          goldLight: 'var(--luxury-gold-light)',
          goldDark: 'var(--luxury-gold-dark)',
          goldMuted: 'var(--luxury-gold-muted)',
          border: 'var(--luxury-border)',
          borderActive: 'var(--luxury-border-active)',
          text: 'var(--luxury-text)',
          muted: 'var(--luxury-muted)',
          successBg: 'var(--luxury-success-bg)',
          successText: 'var(--luxury-success-text)',
          warningBg: 'var(--luxury-warning-bg)',
          warningText: 'var(--luxury-warning-text)',
          dangerBg: 'var(--luxury-danger-bg)',
          dangerText: 'var(--luxury-danger-text)'
        }
      },
      fontFamily: {
        serif: ['Outfit', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'luxury-glow': '0 0 15px rgba(197, 168, 128, 0.08)',
        'luxury-glow-active': '0 0 25px rgba(197, 168, 128, 0.15)',
        'success-glow': '0 0 15px rgba(106, 211, 159, 0.1)',
        'warning-glow': '0 0 15px rgba(245, 176, 65, 0.1)',
        'danger-glow': '0 0 15px rgba(240, 125, 125, 0.1)',
      }
    }
  },
  plugins: [],
}
