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

| Command           | Purpose                        |
| ----------------- | ------------------------------ |
| `npm run dev`     | Dev server at `localhost:4321` |
| `npm run build`   | Build to `./dist/`             |
| `npm run preview` | Preview production build       |

---

## Setup Guide: Tailwind CSS & Theming

### 1. Install Tailwind

```bash
npx astro add tailwind
```

This automatically:

- Installs `tailwindcss` and `@astrojs/tailwind`
- Creates `tailwind.config.mjs`
- Updates `astro.config.mjs`

### 2. Define Theme Colors

Edit `tailwind.config.mjs`:

```js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          // ... generate full palette
          500: '#22c55e', // main brand color
          600: '#16a34a',
          700: '#15803d',
        },
        secondary: {
          // secondary palette
        },
      },
    },
  },
};
```

**Tip:** Use [Tailwind CSS Color Generator](https://uicolors.app/create) or [Coolors](https://coolors.co/) to generate full color palettes from a single hex value.

### 3. Component Library Options for Astro

| Library                                 | Description                               | Best For                     |
| --------------------------------------- | ----------------------------------------- | ---------------------------- |
| **[daisyUI](https://daisyui.com/)**     | Tailwind plugin with pre-built components | Quick prototyping, themeable |
| **[shadcn/ui](https://ui.shadcn.com/)** | Copy-paste components (React)             | Full control, modern design  |
| **[Preline](https://preline.co/)**      | Tailwind components with JS               | No framework dependency      |
| **[Flowbite](https://flowbite.com/)**   | Tailwind component library                | Comprehensive, good docs     |

**Recommended for pure Astro:** daisyUI or Preline (no React needed)

#### daisyUI Setup

```bash
npm install -D daisyui
```

Add to `tailwind.config.mjs`:

```js
import daisyui from 'daisyui';

export default {
  // ...
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        team: {
          primary: '#22c55e',
          secondary: '#3b82f6',
          accent: '#f59e0b',
          neutral: '#1f2937',
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
```

#### Preline Setup (Alternative)

```bash
npm install preline
```

Add to Layout.astro:

```astro
<script>
  import 'preline/preline';
</script>
```

### 4. CSS Custom Properties (Alternative to Tailwind themes)

Create `src/styles/theme.css`:

```css
:root {
  --color-primary: #22c55e;
  --color-primary-dark: #15803d;
  --color-secondary: #3b82f6;
}
```

Import in Layout.astro and use in Tailwind:

```js
// tailwind.config.mjs
colors: {
  primary: 'var(--color-primary)',
}
```
