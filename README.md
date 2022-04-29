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


## Publishing to Github Pages
This private repository includes a github workflow to automatically build and publish the website to the [gh-pages](https://github.com/GlitchSecure/website/tree/gh-pages) branch as well as the public [GlitchSecure/public-website](https://github.com/GlitchSecure/public-website/) repository. The public repository hosts the live [glitchsecure.com](https://glitchsecure.com/) website.


### Initial Setup
- Step 1. Clone this *private* repository.
- Step 2. Run `bundle install && npm install`.
- Step 3. Make any modications needed, preview them locally with `npm start`.
- Step 4. Add [PAT](https://github.com/settings/tokens) with `repo` permissions to the [repo secrets](https://github.com/GlitchSecure/website/settings/secrets/actions) as `PRIVATE_REPO_ACCESS_TOKEN` if not already done.
- Step 5. Update `GITHUB_REPOSITORY_PUBLIC` in the `jekyll-ghpages.yml` file to the *public* repo used for github pages if not already done.
- Step 6. Push changes to [GlitchSecure/website](https://github.com/GlitchSecure/website/). Any changes on the `main` branch will be compiled into the `gh-pages` branch and also moved to the public repository.


## Acknowledgements
- Initial code inspired by [Cookie](https://github.com/abhinavs/cookie).
- Design components provided by [Tailwind UI](https://tailwindui.com/).
- JS Interaction built using [Alpine.js](https://alpinejs.dev/).
- Image compression provided by [jekyll_image_optim](https://gist.github.com/sffc/a828267913591159ab1cc3e1bfde20d7).
- Github actions for publishing to pages [forked](https://github.com/GlitchSecure/jekyll4-deploy-gh-pages) from [jekyll4-deploy-gh-pages](https://github.com/joshlarsen/jekyll4-deploy-gh-pages).
