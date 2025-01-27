# @gitcoin/config

Shared configuration files for the Gitcoin Core Design System monorepo, including ESLint,
TypeScript, and Prettier configurations.

## Overview

This package contains centralized configuration files used across the monorepo to ensure consistent
code style, linting rules, and TypeScript settings.

## Structure

```
.
├── eslint/              # ESLint configurations
│   ├── library.js       # Base config for libraries
│   ├── next.js         # NextJS specific rules
│   ├── react.js        # React specific rules
│   ├── react-internal.js # Internal React rules
│   └── storybook.js    # Storybook specific rules
│
└── tsconfig/           # TypeScript configurations
    ├── base.json       # Base TS config
    ├── nextjs.json     # NextJS specific config
    ├── react.json      # React specific config
    ├── storybook.json  # Storybook specific config
    └── ui.json         # UI package specific config
```

## Usage

### ESLint Configs

```js
// .eslintrc.js
module.exports = {
  extends: ['@gitcoin/config/eslint-react'],
  // or any other config:
  // '@gitcoin/config/eslint-library'
  // '@gitcoin/config/eslint-next'
  // '@gitcoin/config/eslint-storybook'
}
```

### TypeScript Configs

```json
{
  "extends": "@gitcoin/config/tsconfig-react.json"
  // or any other config:
  // "@gitcoin/config/tsconfig-nextjs.json"
  // "@gitcoin/config/tsconfig-storybook.json"
  // "@gitcoin/config/tsconfig-ui.json"
}
```

### Prettier Config (Coming Soon)

```js
// .prettierrc.js
module.exports = {
  ...require('@gitcoin/config/prettier')
}
```

## Available Configurations

### ESLint

- `eslint-library`: Base configuration for libraries
- `eslint-next`: Rules for Next.js applications
- `eslint-react`: Rules for React applications
- `eslint-react-internal`: Internal React specific rules
- `eslint-storybook`: Rules for Storybook files

### TypeScript

- `tsconfig/base.json`: Base TypeScript configuration
- `tsconfig/nextjs.json`: Next.js specific configuration
- `tsconfig/react.json`: React specific configuration
- `tsconfig/storybook.json`: Storybook specific configuration
- `tsconfig/ui.json`: UI package specific configuration

### Prettier (Coming Soon)

Shared Prettier configuration to ensure consistent code formatting across all Gitcoin repositories.

## License

AGPL-3.0 - see the [LICENSE](../../LICENSE) file for details.
