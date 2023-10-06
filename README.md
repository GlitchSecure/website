# GlitchSecure.com

Company website built using Jekyll, Tailwind, and Alpine.js.
Includes NPM scripts for running locally with livereload, JS bundling using esbuild, image compression using image_optim, as well as html and css processing and minification.

## Contributing

Contributing to the website content, layouts, and the blog is highly encouraged. All GlitchSecure team members are welcome to join in.

When contributing to the site, use the following process:

1. Follow the [usage](#usage) section to pull and run the website repo locally.
2. Make any changes as desired in a new branch. If it's a blog post, copy the `2032-10-20-example-post.md` to `_posts/` and follow the commented instructions.
3. Test the changes locally.
4. Create a PR and follow the instructions in the PR template.
5. Take a moment to test the deployed preview site on [Cloudflare Pages](#cloudflare-pages).
6. Request a review from `GlitchSecure/content-team` and use the #internal-content channel to discuss as needed.
7. A member of Content Team (likely Brad or Jade) will make any changes directly to the branch.
8. Once changes are made and reviews are approved, changes can be merged.

## Usage

Clone the repo and install dependencies

```
git clone git@github.com:GlitchSecure/website.git
bundle install && npm install
```

Start a locally hosted development preview.

```
npm start
```

Build a local copy of the production site.

```
npm run build
```

## Cloudflare Pages

This private repository is setup to work with CloudFlare pages for both production and preview deployments. CloudFlare Pages will automatically build and publish the website to `glitchsecure.com` using the `main` branch as well as create preview sites for any non production branch.

Preview branches are generated on `*.glitchsecure.pages.dev` subdomains and are behind our [CloudFlare access policy](https://handbook.glitchsecure.com/infrastructure/internal-tools/). These preview branches are made available automatically within a few minutes via PR comments and should be used for testing, reviewing, and verifying changes.

## Acknowledgements

- Initial code inspired by [Cookie](https://github.com/abhinavs/cookie).
- Design components provided by [Tailwind UI](https://tailwindui.com/).
- JS Interaction built using [Alpine.js](https://alpinejs.dev/).
- Image compression provided by [jekyll_image_optim](https://gist.github.com/sffc/a828267913591159ab1cc3e1bfde20d7).
- Github actions for publishing to pages [forked](https://github.com/GlitchSecure/jekyll4-deploy-gh-pages) from [jekyll4-deploy-gh-pages](https://github.com/joshlarsen/jekyll4-deploy-gh-pages).
