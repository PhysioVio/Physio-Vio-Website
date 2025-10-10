# PhysioFlow Genesis

A modern physiotherapy practice website built with cutting-edge technologies.

🌐 **Live Demo**: [https://privlab-org.github.io/physio-flow-genesis/](https://privlab-org.github.io/physio-flow-genesis/)

## Technologies

- **Vite 7** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React 19** - Modern UI library
- **shadcn/ui** - High-quality UI components
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router 7** - Client-side routing

## Development

### Prerequisites

- Node.js 20+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- pnpm 10+

### Getting Started

```sh
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Format code
pnpm format

# Type check
pnpm typecheck
```

### 🚀 Quick Deploy

```sh
pnpm deploy
```

This will automatically:

- ✅ Check TypeScript types
- ✅ Lint code
- ✅ Format code with Prettier
- ✅ Build for production
- ✅ Commit and push to GitHub
- ✅ Trigger automatic deployment

See [DEPLOY_SCRIPT.md](./DEPLOY_SCRIPT.md) for details.

## Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

Every push to the `main` branch automatically deploys to GitHub Pages via GitHub Actions.

### Manual Deployment

1. Build the project: `pnpm build`
2. Push to GitHub: The workflow will automatically deploy

### GitHub Pages Setup (One-time)

1. Go to your repository settings
2. Navigate to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. The site will be available at: `https://privlab-org.github.io/physio-flow-genesis/`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Static assets
```

## Features

- ✅ Modern, responsive design
- ✅ SEO optimized
- ✅ Cookie consent management
- ✅ Contact form with validation
- ✅ Team presentation
- ✅ Opening hours
- ✅ Legal pages (Impressum, Datenschutz, AGB)
- ✅ Fast loading times
- ✅ Accessibility features

## License

All rights reserved © 2025 PHYSIOVIO
