const defaultTheme = require("tailwindcss/defaultTheme");
const withAnimations = require("animated-tailwindcss");

module.exports = withAnimations({
  darkMode: 'class',
  content: [
    "*.html",
    "_site/*.html",
    "_site/**/*.html",
    "_pages/**/*.md",
    "_posts/**/*.md",
    "_layouts/**/*.html",
    "_includes/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "hero-gradient-left": "#6540b0",
        "glitchsecure-purple": "#5720c8",
        "hero-gradient-right": "#461AA0",
        "glitchsecure-purple-secondary": "#756892",
        "glitchsecure-purple-dark": "#1d162b",
        "hero-gradient-middle-dark": "#240f4c",
        "hero-gradient-right-dark": "#221243",
        "glitchsecure-purple-medium": "#271d3a",
        "glitchsecure-purple-light": "#320e7a",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-radial-at-t":
          "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "gradient-radial-at-b":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "gradient-radial-at-l":
          "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
        "gradient-radial-at-r":
          "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
        "gradient-radial-at-tl":
          "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
        "gradient-radial-at-tr":
          "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
        "gradient-radial-at-bl":
          "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
        "gradient-radial-at-br":
          "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.neutral.700"),
            h1: {
              color: theme("colors.neutral.700"),
            },
            h2: {
              color: theme("colors.neutral.600"),
            },
            h3: {
              color: theme("colors.neutral.600"),
            },
            strong: {
              color: theme("colors.neutral.600"),
            },
            a: {
              color: theme("colors.violet.600"),
              "&:hover": {
                color: theme("colors.violet.500"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar-hide'),
  ],
});
