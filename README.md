# Chloe Portfolio

Interactive personal portfolio built with React, Vite, Motion, and Tailwind CSS.
The application is a one-page, scene-based experience with guided scrolling, bilingual content (`EN` / `FR`), `react-i18next` localization, light and dark themes, a custom cursor, and Docker-based development/production workflows.

The original visual direction comes from the Figma file:
https://www.figma.com/design/JqObwkkWS8BL2Ls1aPJg8y/Interactive-Personal-Portfolio-Website

## Features

- Scene-driven single-page portfolio
- English and French localization
- Light / dark theme with persisted preference
- Guided section scrolling for more reliable navigation
- Intro loader with theme-aware styling
- Custom desktop cursor
- Docker development and production setup
- Atomic-design structure for the active app surface

## Tech Stack

- React 18
- Vite 6
- TypeScript
- Tailwind CSS 4
- Motion
- Docker / Docker Compose

## Project Structure

The active portfolio app now follows an atomic-design structure.

```text
src/app
├── App.tsx
├── content/
│   └── siteContent.ts
├── hooks/
│   ├── useDesktopCursor.ts
│   ├── useGuidedSectionScroll.ts
│   └── usePortfolioPreferences.ts
├── legacy/
│   └── ...
└── components/
    ├── atoms/
    │   ├── AmbientOrb.tsx
    │   └── SectionTitle.tsx
    ├── molecules/
    │   ├── LanguageToggle.tsx
    │   ├── LoaderBrand.tsx
    │   ├── ScrollIndicator.tsx
    │   └── ThemeModeButton.tsx
    ├── organisms/
    │   ├── AppControls.tsx
    │   ├── CustomCursor.tsx
    │   ├── LoadingScreen.tsx
    │   └── ParallaxBackground.tsx
    ├── templates/
    │   ├── PortfolioPage.tsx
    │   └── scenes/
    │       ├── HeroScene.tsx
    │       ├── IntroductionScene.tsx
    │       ├── ExpertiseScene.tsx
    │       ├── WorkflowScene.tsx
    │       ├── ProjectsScene.tsx
    │       ├── DesignScene.tsx
    │       ├── QualitiesScene.tsx
    │       ├── ContactScene.tsx
    │       └── FinalScene.tsx
    └── ui/
```

### Atomic Design Mapping

- `atoms`: smallest reusable visual primitives
- `molecules`: simple component combinations built from atoms
- `organisms`: larger UI assemblies such as controls, overlays, and persistent app chrome
- `templates`: page-level composition and the scene templates used by the portfolio

### Legacy Archive

Older experimental and pre-refactor components were moved to `src/app/legacy/`.
They are kept for reference only and are not part of the active render path.

## Running the Project

### Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

### Linting

```bash
make lint
```

`make lint` runs inside the Docker dev service, so it does not depend on a working local `node_modules` directory.

### Docker development

```bash
docker compose up --build portfolio-dev
```

Open `http://localhost:5173`.

### Docker production preview

```bash
docker compose up --build portfolio-prod
```

Open `http://localhost:8080`.

## Makefile Shortcuts

```bash
make install   # docker compose build portfolio-dev
make run       # docker compose up -d portfolio-dev
make ps        # docker compose ps
make logs      # docker compose logs -f portfolio-dev
make stop      # docker compose down
make lint      # eslint
```

Note: `make stop` shuts down the full Compose project.

## Content and Localization

All user-facing copy used by the active portfolio experience lives in separate locale files:

```text
src/app/i18n/locales/en.ts
src/app/i18n/locales/fr.ts
```

Shared translation types live in `src/app/content/siteContent.ts`, and i18n initialization lives in `src/app/i18n/index.ts`.

## Contact Form

The contact form submits through Formspree. Configure it locally or in CI with:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

For local development, copy `.env.example` to `.env` and set the real Formspree endpoint there.
For the deployed GitHub Pages site, add `VITE_FORMSPREE_ENDPOINT` as a repository variable so the workflow can inject it at build time.

The destination Gmail address is configured in Formspree, not stored in this repository.

## Validation

A production build can be validated with:

```bash
docker compose build portfolio-prod
```
