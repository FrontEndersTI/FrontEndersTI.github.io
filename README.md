[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Frontenders Ticino site

![FETI logo](./public/android-chrome-192x192.png)

frontenders.ch is a static site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com/). It is the landing page for the Frontenders Ticino community. It shows the past and upcoming events, the members of the community and the sponsors.

🚀 [Live](https://www.frontenders.ch/)

## ♿ (Accessibility) Features

- Tailwind CSS support
- Prettier integration with `prettier-plugin-astro` and `prettier-plugin-tailwind`
- ESLint integration with strict accessibility settings for `eslint-plugin-jsx-a11y`
- Markdown and MDX support with examples included in the theme
- Uses the awesome `astro-icon` package for the icons
- Excellent Lighthouse/PageSpeed scores
- Accessible landmarks such as `header`, `main`, `footer`, `section` and `nav`
- Outline focus indicator which works on dark and light backgrounds
- Several `aria` attributes which provide a better experience for screen reader users
- `[...page].astro` and `[post].astro` demonstrate the use of dynamic routes and provide a basic blog with breadcrumbs and pagination
- `404.astro` provides a custom 404 error page which you can adjust to your needs
- `Header.astro` component included in the `DefaultLayout.astro` layout
- `Footer.astro` component included in the `DefaultLayout.astro` layout
- `SkipLinks.astro` component to skip to either the main menu or the main content
- `Navigation.astro` component with keyboard accessible (dropdown) navigation (arrow keys, escape key)
- `ResponsiveToggle.astro` component with an accessible responsive toggle button for the mobile navigation
- `DarkMode.astro` component toggle with accessible button and a user system preferred color scheme setting
- `SiteMeta.astro` SEO component for setting custom meta data on different pages
- `.sr-only` utility class for screen reader only text content (hides text visually)
- `prefers-reduced-motion` disables animations for users that have this preference turned on
- Ships with many components such as Accordions, Breadcrumbs, Modals, Pagination [and many more](https://accessible-astro.dev/accessible-components)
- A collection of utility classes such as breakpoints, button classes, font settings, resets and outlines in `src/assets/scss/base`

## 🚀 Getting started

Clone this theme locally and run any of the following commands in your terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |


## ❤️ Helping out

If you find that something isn't working right then I'm always happy to hear it to improve this starter! You can contribute in many ways and forms. Let me know by either:

1. [Filing an issue](https://github.com/FrontEndersTI/FrontEndersTI.github.io.git/issues)
2. [Submitting a pull request](https://github.com/markteekman/accessible-astro-starter/pulls)
3. [Starting a discussion](https://github.com/markteekman/accessible-astro-starter/discussions)

## ☕ Thank you!

A big thank you to the creators of the awesome Astro static site generator and to all using this starter to make the web a bit more accessible for all people around the world :)
