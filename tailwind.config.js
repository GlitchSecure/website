const defaultTheme = require('tailwindcss/defaultTheme')
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ['*.html', '_site/*.html','_site/**/*.html', '_pages/**/*.md', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#1d162b',
        'medium-purple': '#271d3a',
        'light-purple': '#320e7a',
      },
      backgroundImage: {
  'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
  'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
  'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
  'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
  'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
  'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
  'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
  'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
  'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
},
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.200'),
            h1: {
              color: theme('colors.gray.200'),
            },
            h2: {
              color: theme('colors.gray.300'),
            },
            h3: {
              color: theme('colors.gray.300'),
            },
            strong: {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.violet.600'),
              '&:hover': {
                color: theme('colors.violet.500')
              },
            },
          },
        },
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require("tailgrids/plugin"),
  ]
})
