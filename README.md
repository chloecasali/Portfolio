# Portfolio – Chloe Casali

Interactive vibe-coding portfolio built with React, Vite, Motion, and Tailwind CSS.

## Features

- Scene-based one-page portfolio
- English and French localization with `react-i18next`
- Light and dark theme toggle with persisted preference
- Guided section scrolling between portfolio scenes
- Intro loading screen and parallax background
- Contact form submission through Formspree
- GitHub Pages deployment through GitHub Actions
- Optional Docker-based local development workflow

## Tech Stack

- React 18
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Docker / Docker Compose for local development

## Running the Project

### Local development

```bash
make install
make run
```

Open `http://localhost:5173`.

### Linting

```bash
make lint
```

### Testing

```bash
make test
```

## Makefile Shortcuts

```bash
make install   # docker compose build 
make run       # docker compose up -d 
make ps        # docker compose ps
make logs      # docker compose logs -f portfolio-dev
make stop      # docker compose stop
make down      # docker compose down
make lint      # docker compose run --rm portfolio-dev npm run lint
make test      # docker compose run --rm portfolio-dev npm run test
```
