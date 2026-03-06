# Chloe Portfolio

Interactive personal portfolio built with React, Vite, Motion, and Tailwind CSS.
The application is a one-page, scene-based experience with guided scrolling, bilingual content (`EN` / `FR`), light and dark themes, a custom cursor, and Docker-based development/production workflows.

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
```

Note: `make stop` shuts down the full Compose project.

## Content and Localization

All user-facing copy used by the active portfolio experience lives in:

```text
src/app/content/siteContent.ts
```

This file contains the English and French versions of the scene content, labels, and UI text.

## Validation

A production build can be validated with:

```bash
docker compose build portfolio-prod
```
