# Copilot Instructions

## Project Overview

Astro 5.x landing page for a disc golf team from Bergen. TypeScript strict mode enabled.

## Architecture

```
src/
├── pages/       # File-based routing (.astro → route)
├── layouts/     # Page shells with <slot /> for content
├── components/  # Reusable .astro components
└── assets/      # Processed images/SVGs
public/          # Static files (favicons)
```

## Commands

| Command           | Purpose                              |
|-------------------|--------------------------------------|
| `npm run dev`     | Dev server at `localhost:4321`       |
| `npm run build`   | Build to `./dist/`                   |
| `npm run preview` | Preview production build             |

---

## Setup Guide: Formatting, Linting & Pre-commit Hooks

### 1. Prettier (Formatting)

```bash
npm install -D prettier prettier-plugin-astro
```

Create `prettier.config.mjs`:
```js
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};
```

Add to `package.json` scripts:
```json
"format": "prettier --write .",
"format:check": "prettier --check ."
```

### 2. ESLint (Linting)

```bash
npm install -D eslint eslint-plugin-astro @typescript-eslint/parser
```

Create `eslint.config.mjs`:
```js
import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
];
```

Add to `package.json` scripts:
```json
"lint": "eslint .",
"lint:fix": "eslint . --fix"
```

### 3. Pre-commit Hooks (Husky + lint-staged)

```bash
npm install -D husky lint-staged
npx husky init
```

This creates `.husky/` directory. Edit `.husky/pre-commit`:
```bash
npx lint-staged
```

Add to `package.json`:
```json
"lint-staged": {
  "*.{js,ts,astro}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css}": ["prettier --write"]
}
```

### 4. VS Code Integration (Optional)

Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  "eslint.validate": ["javascript", "typescript", "astro"]
}
```

Recommended extensions:
- `astro-build.astro-vscode`
- `esbenp.prettier-vscode`
- `dbaeumer.vscode-eslint`

### Quick Start Summary

```bash
# Install all at once
npm install -D prettier prettier-plugin-astro eslint eslint-plugin-astro @typescript-eslint/parser husky lint-staged

# Initialize husky
npx husky init

# Then create config files as shown above
```
