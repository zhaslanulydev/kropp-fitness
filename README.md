# Kropp Fitness

> Responsive fitness club landing page built with vanilla HTML, CSS and JavaScript.

**[Live Demo](https://zhaslanulydev.github.io/kropp-fitness/)**

Kropp Fitness is a completed frontend project created to practice not only responsive web development, but also a professional development workflow around a relatively small project.

The project focuses on **code quality, automation, maintainability, SEO and PWA capabilities** without relying on a frontend framework.

## Features

- Responsive design for desktop, tablet and mobile
- Semantic HTML
- Vanilla JavaScript
- SEO metadata
- Open Graph metadata
- Progressive Web App support
- Web App Manifest
- Service Worker with offline support
- Adaptive favicons
- Automated code quality checks
- Git hooks
- Conventional Commits
- CI/CD with GitHub Actions
- Automatic deployment to GitHub Pages

## Tech Stack

### Core

- HTML5
- CSS3
- JavaScript
- Web APIs

### Tooling

- [pnpm](https://pnpm.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- [Commitlint](https://commitlint.js.org/)
- GitHub Actions

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── .husky/
├── src/
│   ├── assets/
│   ├── scripts/
│   ├── styles/
│   ├── index.html
│   └── sw.js
├── .editorconfig
├── .prettierignore
├── .prettierrc
├── commitlint.config.js
├── eslint.config.js
├── package.json
├── pnpm-lock.yaml
├── stylelint.config.mjs
└── README.md
```

## Engineering Practices

### Code Quality

The project uses multiple tools to keep the codebase consistent and maintainable:

- **ESLint** for JavaScript
- **Stylelint** for CSS
- **Prettier** for formatting

A unified `check` command runs all quality checks:

```bash
pnpm check
```

It verifies formatting, JavaScript linting and CSS linting before changes are considered ready.

### Git Hooks

**Husky** and **lint-staged** are used to run automated checks against staged files.

This allows formatting and linting to happen automatically during the Git workflow instead of relying entirely on manual checks.

### Commit Convention

The repository uses **Commitlint** with the Conventional Commits specification to keep commit messages consistent.

### CI

GitHub Actions runs the project's checks on both pushes and pull requests.

The CI workflow:

1. Checks out the repository
2. Installs pnpm
3. Sets up Node.js
4. Installs dependencies using the frozen lockfile
5. Runs `pnpm check`

This ensures that changes are checked automatically before being merged or deployed.

### Continuous Deployment

The project is automatically deployed to **GitHub Pages** when changes are pushed to the `main` branch.

The deployment workflow publishes the `src` directory directly as the static site.

## PWA

Kropp Fitness includes several Progressive Web App capabilities:

- Web App Manifest
- Service Worker
- Offline caching
- Installable web app configuration
- Adaptive favicon setup

The Service Worker allows previously cached resources to remain available when the application is accessed without an active network connection.

## SEO & Social Sharing

The page includes technical SEO and social sharing considerations, including:

- Semantic HTML
- Page metadata
- Open Graph metadata
- Responsive viewport configuration
- Favicon and application icon configuration

## Development

Clone the repository:

```bash
git clone https://github.com/zhaslanulydev/kropp-fitness.git
cd kropp-fitness
```

Install dependencies:

```bash
pnpm install
```

Run the project using a local static development server.

For example:

```bash
pnpm dlx serve src
```

The project itself does not require a frontend framework or bundler.

## Available Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `pnpm format`       | Format project files with Prettier |
| `pnpm format:check` | Check formatting                   |
| `pnpm lint`         | Lint JavaScript                    |
| `pnpm lint:fix`     | Fix JavaScript lint issues         |
| `pnpm lint:css`     | Lint CSS                           |
| `pnpm lint:css:fix` | Fix CSS lint issues                |
| `pnpm check`        | Run all formatting and lint checks |

## Project Status

**Completed**

This project is maintained as a portfolio piece demonstrating frontend development with vanilla technologies and a structured engineering workflow.

## Purpose

The main goal of Kropp Fitness was to demonstrate that even a small static frontend project can be developed with practices commonly used in larger production codebases.

The project combines:

**Responsive UI · Semantic HTML · Vanilla JavaScript · Code Quality · Git Hooks · Conventional Commits · CI/CD · SEO · PWA**
