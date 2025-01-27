# Gitcoin Core Design System

A comprehensive design system and component library powering Gitcoin's ecosystem of web applications. This monorepo contains the shared UI components, utilities, and configuration used across Gitcoin's products.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [What's next?](#whats-next)
- [Tech Stack](#tech-stack)
  - [Core Technologies](#core-technologies)
  - [Tools & Libraries](#tools--libraries)
  - [Development Tools](#development-tools)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Commands](#development)
- [Project Structure](#project-structure)
  - [Apps & Packages](#apps--packages)
  - [Component Organization](#component-organization)
- [Build Tools](#build-tools)
- [Versioning & Publishing Packages](#versioning--publishing-packages)
  - [Generating the Changelog](#generating-the-changelog)
  - [Releasing](#releasing)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Overview

Gitcoin Core is built and maintained by the Gitcoin team and community to:
- Ensure consistency across all Gitcoin products
- Accelerate development with pre-built, tested components
- Maintain high quality standards for accessibility and user experience
- Enable seamless collaboration between teams and contributors
- Provide a single source of truth for Gitcoin's design language

## Key Features

- 🎨 Complete design system implementation
- 🧱 Production-ready React components

## What's next?

- ⚡️ Production-ready NextJS components
- ♿️ Accessible by default (WCAG 2.1 compliant) (coming soon)
- 📱 Responsive and mobile-first (coming soon)
- 🌗 Dark mode support (coming soon)
- 🌍 Internationalization ready (coming soon)
- ⚡️ Performance optimized (coming soon)
- 📚 Comprehensive documentation (coming soon)

## Tech Stack

This design system is powered by modern, battle-tested technologies:

### Core Technologies

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Vite](https://vitejs.dev/) — Next Generation Frontend Tooling (for UI package)
- 🔨 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild (for other packages)
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

### Tools & Libraries

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Tailwind Variants](https://www.tailwind-variants.org/) for type-safe variants
- [Shadcn/ui](https://ui.shadcn.com/) for accessible UI components
- [React Query](https://tanstack.com/query/latest) for server state management
- [React Hook Form](https://react-hook-form.com/) for form handling
- [Zod](https://zod.dev/) for schema validation

### Development Tools

- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for versioning
- [MSW](https://mswjs.io/) for API mocking
- [Vitest](https://vitest.dev/) for unit testing
- [Testing Library](https://testing-library.com/) for component testing

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

### Development

```bash
# Start Storybook and watch for changes
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format

# Clean build artifacts
pnpm clean
```

## Project Structure

### Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/next-app`: A placeholder documentation site powered by [Next.js](https://nextjs.org/)
- `packages/config`: Shared configuration (ESLint, TypeScript, etc.)
- `packages/themes`: Shared theme configuration and color utilities
- `packages/types`: Shared TypeScript types
- `packages/ui`: Core React components
- `packages/utils`: Shared React utilities


Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). Workspaces enables us to
"hoist" dependencies that are shared between packages to the root `package.json`. This means smaller
`node_modules` folders and a better local dev experience. To install a dependency for the entire
monorepo, use the `-w` workspaces flag with `pnpm add`.

This example sets up your `.gitignore` to exclude all generated files, other folders like
`node_modules` used to store your dependencies.

### Component Organization

The UI components are organized in the following structure:

```
packages/ui/src/
├── components/      # Higher-level components
├── features/        # Feature-specific components
├── primitives/      # Basic UI building blocks
└── ui-shadcn/      # Shadcn UI components
```

Each component follows a standard structure:

```tsx
├── ComponentName/
│   ├── ComponentName.tsx      # Main component
│   ├── ComponentName.stories.tsx  # Storybook stories
│   ├── ComponentName.mdx     # Documentation
│   └── index.ts             # Public exports
```

## Build Tools

This monorepo uses different build tools for different packages:

- `@gitcoin/ui`: Uses Vite for building the component library with features like SVG imports, TypeScript declaration files, and CSS processing
- All other packages: Use Tsup for fast, efficient TypeScript/JavaScript bundling

## Versioning & Publishing Packages

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create
changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository
settings to enable access to npm. It's also worth installing the
[Changesets bot](https://github.com/apps/changeset-bot) on your repository.

### Generating the Changelog

To generate your changelog, run `pnpm changeset` locally:

1. **Which packages would you like to include?** – This shows which packages have changed and which
   have remained the same. By default, no packages are included. Press `space` to select the
   packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to
   bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the
   packages included.

### Releasing

When you push your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will
run the `release` script defined in the root `package.json`:

```bash
turbo run build --filter=@repo/*^... && changeset publish
```

Turborepo runs the `build` script for all publishable packages (excluding @repo/*) and publishes the
packages to npm. By default, this example includes `gitcoin` as the npm organization. To change
this, do the following:

- Rename folders in `packages/*` to replace `gitcoin` with your desired scope
- Search and replace `gitcoin` with your desired scope
- Re-run `pnpm install`

To publish packages to a private npm organization scope, **remove** the following from each of the
`package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

## Documentation

- [Component Library](packages/ui/README.md)
- ~~[Contributing Guide]()~~ (comming soon)
- ~~[Architecture Decisions]()~~ (comming soon)

## Contributing

(Comming soon)

~~Please read our [Contributing Guide]() for details on our code of conduct, and the process for submitting pull requests.~~

## License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

### What this means

- You can freely use, modify, and distribute this software
- If you modify this software and provide it as a network service, you must:
  - Make your modified source code available to users
  - License your modifications under AGPL-3.0
  - Preserve all copyright notices and license information
- All derivative works must also be licensed under AGPL-3.0

## Support

- Join our [Discord](https://discord.gg/gitcoin) for discussions
- Report bugs via [GitHub Issues](https://github.com/gitcoinco/core/issues)
- Follow [@gitcoin](https://twitter.com/gitcoin) for updates