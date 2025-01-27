# @gitcoin/ui

Core UI component library for the Gitcoin Design System, built with React, Tailwind CSS, and Storybook.

## Overview

This package contains all shared UI components, hooks, and utilities used across Gitcoin's applications. It provides a consistent design language and component API to ensure cohesive user experiences.

## Features

- 🎨 60+ Production-ready components
- 📚 Comprehensive Storybook documentation
- 🌗 Dark mode support
- ♿️ Accessible components
- 🎯 TypeScript support
- 🔄 Form handling utilities
- 🎭 Testing utilities
- 📱 Responsive design

## Structure

```
.
├── src/
│   ├── components/        # High-level components
│   ├── features/         # Feature-specific components
│   │   ├── application/  # Application components
│   │   ├── checker/      # Checker components
│   │   ├── pool/         # Pool components
│   │   ├── program/      # Program components
│   │   ├── project/      # Project components
│   │   └── retrofunding/ # Retrofunding components
│   ├── hooks/            # Shared hooks
│   ├── lib/             # Utilities and helpers
│   ├── primitives/      # Base components
│   ├── theme/           # Theme configuration
│   ├── types/           # TypeScript types
│   └── ui-shadcn/       # Shadcn UI components
```

## Installation

```bash
pnpm add @gitcoin/ui
```

## Usage

```tsx
import { Button, Input } from '@gitcoin/ui'
import '@gitcoin/ui/styles.css'

function MyComponent() {
  return (
    <div>
      <Input placeholder="Enter text..." />
      <Button>Click me</Button>
    </div>
  )
}
```

## Development

```bash
# Start Storybook
pnpm dev

# Build package
pnpm build

# Run tests
pnpm test

# Generate new component
pnpm generate-component ComponentName
```

## Available Exports

### Components

- Primitives (Button, Input, Select, etc.)
- Layout components
- Navigation components
- Form components
- Data display components
- Feedback components

### Features

- Application management
- Project evaluation
- Pool management
- Program administration
- Retrofunding interfaces

### Hooks

- `useCredentialVerification`
- `useIndexedDB`
- `usePersistForm`
- `useToast`

### Utilities

- Date formatting
- Icon utilities
- IndexedDB helpers
- SSR utilities

## Documentation

- [Storybook](https://ui.gitcoin.co)
- [Colors](./src/docs/colors.mdx)
- [Typography](./src/docs/typography.mdx)
- [Icons](./src/docs/icons.mdx)

## Contributing

1. Create a new branch
2. Make your changes
3. Add or update tests
4. Add or update Storybook stories
5. Submit a PR

## License

AGPL-3.0 - see the [LICENSE](../../LICENSE) file for details.
