# GlitchSecure.com

Company website built using Jekyll, Tailwind, and Alpine.js.
Includes NPM scripts for running locally with livereload, JS bundling using esbuild, image compression using image_optim, as well as html and css processing and minification.

## Usage

Clone repo and install dependencies

```
git clone git@github.com:GlitchSecure/website.git
bundle install && npm install
```

Start a localy hosted development preview.

```
npm start
```

Build a local copy of the production site.

```
npm run build
```

Publish any committed changes to github pages. This pushes the code to `main` and triggers the build scripts.

```
npm run publish
```

## CloudFlare Pages

This private repository is setup to work with CloudFlare pages for both production and preview deployments. CloudFlare Pages will automatically build and publish the website to `glitchsecure.com` using the `main` branch as well as create preview sites for any non production branch.

Preview branches are generated on `*.website-57s.pages.dev` subdomains and are behind our [CloudFlare access policy](https://handbook.glitchsecure.com/infrastructure/internal-tools/). These preview branches are made available automatically within a few minutes via PR comments and should be used for testing, reviewing, and verifying changes.

## Acknowledgements

- Initial code inspired by [Cookie](https://github.com/abhinavs/cookie).
- Design components provided by [Tailwind UI](https://tailwindui.com/).
- JS Interaction built using [Alpine.js](https://alpinejs.dev/).
- Image compression provided by [jekyll_image_optim](https://gist.github.com/sffc/a828267913591159ab1cc3e1bfde20d7).
- Github actions for publishing to pages [forked](https://github.com/GlitchSecure/jekyll4-deploy-gh-pages) from [jekyll4-deploy-gh-pages](https://github.com/joshlarsen/jekyll4-deploy-gh-pages).
