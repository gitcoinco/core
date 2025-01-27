# @gitcoin/types

Shared TypeScript types and interfaces for the Gitcoin Core Design System.

## Overview

This package contains centralized TypeScript type definitions used across the Gitcoin monorepo to
ensure type consistency between packages and applications.

## Structure

```
.
├── src/
│   ├── button.ts      # Button component types
│   └── index.ts       # Public type exports
│
├── tsconfig.json      # TypeScript configuration
└── tsup.config.ts     # Build configuration
```

## Usage

```typescript
import { ButtonProps, ButtonSize, ButtonVariant } from '@gitcoin/types'

// Use in your components
interface MyButtonProps extends ButtonProps {
  customProp?: string
}

// Use type unions
type Size = ButtonSize // 'sm' | 'md' | 'lg'

// Use variants
type Variant = ButtonVariant // 'primary' | 'secondary' | 'ghost'
```

## Available Types

### Component Props

- `ButtonProps`: Props interface for button components
  - `size`: Size variants
  - `variant`: Style variants
  - Common button attributes

### Common Types

- Size unions
- Variant unions
- Shared utility types

## Development

```bash
# Build types
pnpm build

# Watch mode
pnpm dev

# Type checking
pnpm lint
```

## Build

This package uses `tsup` for building, which provides:

- Type declaration file generation
- Clean builds
- Watch mode
- Tree-shaking
- CommonJS and ESM output

## License

AGPL-3.0 - see the [LICENSE](../../LICENSE) file for details.
