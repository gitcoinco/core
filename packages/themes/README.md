# @gitcoin/themes

Shared theme configuration and color utilities for the Gitcoin Core Design System.

## Overview

This package contains the centralized theme configuration, including Tailwind CSS setup and color
system used across all Gitcoin applications.

## Structure

```
.
├── colors/             # Color system
│   ├── colors.ts      # Color palette definitions
│   ├── index.ts       # Public exports
│   └── types.ts       # TypeScript types for colors
│
└── tailwind.config.ts  # Shared Tailwind configuration
```

## Usage

### Tailwind Configuration

```js
// tailwind.config.js
import { gitcoinTheme } from '@gitcoin/themes/gitcoin-theme'

export default {
  // Extend the shared config
  ...gitcoinTheme,
  // Add your project-specific customizations
}
```

### Color System

```typescript
import { colors } from '@gitcoin/themes/gitcoin-colors'

// Use in your components
const primaryColor = colors.primary[500]
```

## Features

- 🎨 Consistent color palette across all Gitcoin products
- 🔄 Shared Tailwind configuration
- 🌗 Dark mode support
- 🎯 Type-safe color utilities
- ⚡️ Optimized for Tailwind Variants

## Available Exports

### Theme Configuration

- `gitcoin-theme`: Base Tailwind configuration including:
  - Color palette
  - Typography scale
  - Spacing system
  - Animation presets
  - Dark mode configuration

### Color System

- `gitcoin-colors`: Type-safe color definitions including:
  - Brand colors
  - Semantic colors
  - State colors
  - Gradient definitions

## License

AGPL-3.0 - see the [LICENSE](../../LICENSE) file for details.
