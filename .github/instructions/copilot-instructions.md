# Portfolio Project - AI Coding Instructions

## Project Overview

This is a personal portfolio website built with Next.js 15, featuring a dark theme with bright green accent color (`#00ff99`). The site showcases certificates, work experience, services, and contact functionality with advanced animations and responsive design.

## Architecture & Key Patterns

### Component Organization

- **UI Components**: Use shadcn/ui library in `components/ui/` with comprehensive barrel exports via `index.ts`
- **Feature Components**: Organized by function in subdirectories (`navigation/`, `page/`, `photo/`, `socials/`, `stats/`)
- **Page Transitions**: Global animations handled by `PageTransition` and `StairTransition` components using Framer Motion
- **Layout**: Single-layout app with persistent `Header` navigation and transition wrappers

### Styling System

- **Theme**: Dark background (`#1c1c22`) with green accent (`#00ff99`, hover: `#00e187`)
- **Typography**: JetBrains Mono font family (`--font-jetbrains-mono`) for developer aesthetic
- **Responsive**: Custom breakpoints - `xl: 1200px`, `lg: 960px`, standard mobile-first approach
- **CSS Variables**: Extensive use of CSS custom properties for theming (`--background`, `--accent`, etc.)

### Data & Content

- **Static Data**: Certificates and portfolio content stored in TypeScript files in `data/` directory
- **Assets**: Organized in `public/assets/` with subdirectories for `certificates/`, `images/`, `projects/`
- **Files**: Resume/CV files in `public/files/`

### API & Services

- **Contact Form**: API route at `/api/contact/route.ts` using Nodemailer with HTML email templates
- **Email**: Uses Gmail SMTP with environment variables `EMAIL_USER` and `EMAIL_PASSWORD`
- **Analytics**: Vercel Analytics and SpeedInsights integrated in root layout

## Development Workflows

### Commands

- `npm run dev` - Standard development server
- `npm run turbodev` - Development with Turbopack (faster builds)
- `npm run build` - Production build
- Package manager: **Yarn 4.9.2** (use `yarn` commands, not `npm`)

### Animation Patterns

- **Page Transitions**: Always use `motion.div` with opacity animations (delay: 2-2.4s, duration: 0.4s)
- **Entrance Effects**: Staggered animations with `easeIn` and `easeInOut` timing
- **Consistent Timing**: Use delay increments of 0.4s between animated elements

### Component Patterns

- **Functional Components**: All components use `React.FC` type annotation
- **Client Components**: Mark interactive components with `"use client"` directive
- **Imports**: Use absolute imports with `@/` alias for all internal modules
- **Props**: Prefer explicit typing over generic props interfaces

### Responsive Design

- **Mobile-First**: Start with mobile layout, add `xl:` prefixes for desktop
- **Navigation**: Desktop nav in header, separate `MobileNav` component for mobile
- **Layout**: Flexbox with `xl:flex-row` for horizontal desktop, `flex-col` for mobile stack

## Key Files to Reference

- `tailwind.config.ts` - Custom theme, colors, and responsive breakpoints
- `components/ui/index.ts` - Available UI components and their exports
- `app/layout.tsx` - Global layout structure and metadata
- `components/page/PageTransition.tsx` - Animation wrapper pattern
- `data/certificates.ts` - Data structure example for portfolio content

## Environment Setup

Required environment variables:

- `EMAIL_USER` - Gmail account for contact form
- `EMAIL_PASSWORD` - Gmail app-specific password

## Common Patterns

- Always wrap page content in `<section className="h-full">` and `<div className="container mx-auto">`
- Use `text-accent` class for highlighting important text with brand green color
- Implement loading states and error handling for API routes
- Follow the established animation timing (2s+ delays) for consistent user experience
