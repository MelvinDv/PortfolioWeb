# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site (melvinduranvega.com), built as a single-page Vue 2 app with Vue CLI 4 and Vuetify 2. It is bilingual (English/Spanish).

## Commands

```bash
npm install
npm run serve   # dev server with hot reload
npm run build   # production build to dist/ (assets under dist/static/)
npm run lint    # ESLint + Prettier (vue/essential, eslint:recommended, @vue/prettier); autofixes
```

There is no test suite.

## Architecture

- **Entry (`src/main.js`)**: sets up Vuetify, vue-router, Vuex, vue-i18n, vue-scrollto, AOS (scroll animations, used via `data-aos` attributes), and Font Awesome 4 CSS. Vuex (`src/store`) is scaffolded but empty.
- **Single page**: the router's `/` route renders `src/views/HomeView.vue`, which stacks the section components from `src/components/` in order: Header → Work → About → Contact → Footer. `views/Home.vue` is an unused duplicate of `HomeView.vue`, and `/about` (`views/About.vue`) is a leftover scaffold placeholder.
- **Navigation**: `App.vue` holds the app bar and the mobile navigation drawer. Nav items scroll to section anchors (`$scrollTo('#work' | '#about' | '#contact')`) instead of changing routes, so section root elements need those ids. Layout switches between desktop and mobile using `$vuetify.breakpoint.xs`/`smAndDown`.

### i18n

- UI strings live in `src/locales/en.json` and `es.json`; keep both files' keys in sync. `App.vue` persists the chosen locale in `localStorage` under the `userLang` key.
- Project descriptions do **not** go through i18n. Each card in the `cards` array in `WorkSection.vue` has `desc` (EN) and `desc_esp` (ES) HTML strings, which are rendered with `v-html` according to `$i18n.locale`.
- The labels in the mobile drawer in `App.vue` are hardcoded in English and don't use `$t`.

### Work/projects section

`WorkSection.vue` stores all portfolio data inline in `data().cards`. To add a project:
1. Put its images under `src/assets/images/work/<project>/` as `.webp` and import them at the top of the script.
2. Add a card with `id`, `title`, `subtitle`, `shortTitle`, `year`, `img` (the thumbnail), `desc`/`desc_esp`, `images`, and `tech` (badge `name`, text `color` class, and `background` hex).
3. Order `images` by position: `[0]` is the full web screenshot shown in the "Web" tab, `[1]` is the hero image shown above the description, and `[2]` is optional. When `[2]` exists, it enables the "Mobile" tab.

### Contact form

`ContactSection.vue` sends messages with EmailJS (the `emailjs-com` package) and shows the result with SweetAlert2. It reads its credentials from these env vars, which must be defined in a `.env` file (gitignored) for the form to work:
- `VUE_APP_SERVICE_ID`
- `VUE_APP_TEMPLATE_ID`
- `VUE_APP_USER_ID`

## Conventions

- Commit messages and code comments are usually written in Spanish.
- Images are `.webp`.
- Imports use either the `@/` alias or relative paths; both are common in the code.
