# @continuum-ui

![NPM Version](https://img.shields.io/npm/v/@continuum-ui/components)

An example of a component library of [shadcn](https://ui.shadcn.com/) components with a theme, in a tree-shakeable,
reusable package, and compatible with esm and cjs projects.

## Setup

Hope to have a cli to automatically do this, but for now:

Install tailwindcss

```bash
yarn install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add to your tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@continuum-ui/components/**/*{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

Configure your css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root,
    .light {
        --background: 0 0% 100%;
        --foreground: 222.2 84% 4.9%;

        --card: 0 0% 100%;
        --card-foreground: 222.2 84% 4.9%;

        --popover: 0 0% 100%;
        --popover-foreground: 222.2 84% 4.9%;

        --primary: 222.2 47.4% 11.2%;
        --primary-foreground: 210 40% 98%;

        --secondary: 210 40% 96.1%;
        --secondary-foreground: 222.2 47.4% 11.2%;

        --muted: 210 40% 96.1%;
        --muted-foreground: 215.4 16.3% 46.9%;

        --accent: 210 40% 96.1%;
        --accent-foreground: 222.2 47.4% 11.2%;

        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 210 40% 98%;

        --border: 214.3 31.8% 91.4%;
        --input: 214.3 31.8% 91.4%;
        --ring: 222.2 84% 4.9%;

        --radius: 0.5rem;
    }

    .dark {
        --background: 222.2 84% 4.9%;
        --foreground: 210 40% 98%;

        --card: 222.2 84% 4.9%;
        --card-foreground: 210 40% 98%;

        --popover: 222.2 84% 4.9%;
        --popover-foreground: 210 40% 98%;

        --primary: 210 40% 98%;
        --primary-foreground: 222.2 47.4% 11.2%;

        --secondary: 217.2 32.6% 17.5%;
        --secondary-foreground: 210 40% 98%;

        --muted: 217.2 32.6% 17.5%;
        --muted-foreground: 215 20.2% 65.1%;

        --accent: 217.2 32.6% 17.5%;
        --accent-foreground: 210 40% 98%;

        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 210 40% 98%;

        --border: 217.2 32.6% 17.5%;
        --input: 217.2 32.6% 17.5%;
        --ring: 212.7 26.8% 83.9%;
    }
}

@layer base {
    * {
        @apply border-border;
    }
    body {
        @apply bg-background text-foreground;
    }
}
```

## Deploying Beta
```bash
# on the develop branch, automate this with github actions later

yarn changeset add
yarn changeset version
yarn changeset publish --tag beta
```

## Turborepo Useful Links

Learn more about the power of Turborepo:

-   [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
-   [Caching](https://turbo.build/repo/docs/core-concepts/caching)
-   [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
-   [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
-   [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
-   [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
