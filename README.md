# Kiko Portfolio

Personal portfolio website of Kristian Pejić, a full-stack web developer from Grude, Bosnia and Herzegovina.

The site is a single-page Angular application with these sections:

- **Hero** – short introduction and contact links
- **Tech stack** – animated strip of the languages, frameworks and tools I work with
- **Experience** – timeline of internships and jobs
- **Projects** – filterable, paginated gallery of my work with links to source code and live demos
- **Education** and **Certificates**

The interface is available in English and Croatian; the language toggle is in the navbar.

## Tech stack

| Part | Technology |
|---|---|
| Framework | Angular 18 |
| Styling | Tailwind CSS 3 |
| Icons | Font Awesome |
| Font | Montserrat (Google Fonts) |
| Language | TypeScript |

Scroll-reveal animations use a small custom directive built on `IntersectionObserver`, with reduced-motion preferences respected.

## Running locally

You need Node.js 18 or newer.

```bash
npm install
npm start
```

The dev server runs at `http://localhost:4200/` and reloads on file changes.

## Building

```bash
npm run build
```

The production bundle is written to `dist/kiko-portfolio/`.

## Project structure

```
src/
  app/
    components/      one folder per page section (hero, tech-stack, experience, ...)
    directives/      scroll-reveal.directive.ts
    services/        language.service.ts (translations and language toggle)
  styles.css         Tailwind entry point and global styles
public/              project screenshots, favicon and social preview image
```

## Adding a project

Projects are plain data in `src/app/components/project-showcase/project-showcase.component.ts`. Add an object to the `projects` array with a title, description, technologies, an image file name from `public/`, and optionally a `link` (source code) and `liveLink` (deployed site). Keep images at 1200 px wide or less and prefer JPEG for screenshots.
