# Paragraph - Creative Studio Portfolio

A modern, multi-language portfolio website for a creative agency specializing in brand design, content creation, and digital experiences. Built with Next.js 15, React 19, and cutting-edge web technologies.

## 🌟 Features

-   **Multi-language Support** - Fully internationalized with English, Spanish, and French translations
-   **Modern UI/UX** - Beautiful, responsive design with smooth animations
-   **3D Visualizations** - Interactive 3D elements powered by Three.js and React Three Fiber
-   **Portfolio Showcase** - Dynamic gallery grids with tabbed categorization (Companies, Products, Real Estate, Selected Projects)
-   **Contact Integration** - EmailJS-powered contact form
-   **Performance Optimized** - Built with Next.js for optimal performance and SEO
-   **Dark Mode Ready** - Theme support via next-themes
-   **Interactive Components** - Hover effects, animations, and transitions using Framer Motion and GSAP

## 🛠 Tech Stack

### Core

-   **Next.js 15** - React framework with App Router
-   **React 19** - UI library
-   **TypeScript** - Type safety

### UI & Styling

-   **Tailwind CSS 4** - Utility-first CSS framework
-   **Radix UI** - Accessible component primitives
-   **Framer Motion** - Animation library
-   **GSAP** - Advanced animations
-   **Lucide React** - Icon library

### 3D & Graphics

-   **Three.js** - 3D graphics library
-   **@react-three/fiber** - React renderer for Three.js
-   **@react-three/drei** - Useful helpers for react-three-fiber

### Internationalization

-   **next-intl** - Internationalization for Next.js

### Other Libraries

-   **EmailJS** - Email service integration
-   **Sonner** - Toast notifications
-   **Embla Carousel** - Touch-friendly carousel

## 📁 Project Structure

```
overty/
├── public/
│   ├── fonts/          # Custom fonts
│   ├── images/         # Image assets
│   └── videos/         # Video assets
├── messages/           # Translation files
│   ├── en.json
│   ├── es.json
│   └── fr.json
├── src/
│   ├── app/           # Next.js app router pages
│   │   ├── en/        # English pages
│   │   ├── es/        # Spanish pages
│   │   └── fr/        # French pages
│   ├── components/    # React components
│   │   ├── atoms/     # Basic UI components
│   │   ├── molecules/ # Composite components
│   │   ├── organisms/ # Complex components
│   │   ├── views/     # Page-level components
│   │   └── ui/        # Radix UI components
│   ├── i18n/          # Internationalization config
│   ├── lib/           # Utilities and helpers
│   └── styles/        # Global styles
└── package.json
```

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd paragraph
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint

## 🌐 Internationalization

The project uses `next-intl` for multi-language support. Translation files are located in the `messages/` directory:

-   `en.json` - English
-   `es.json` - Spanish
-   `fr.json` - French

To add a new language:

1. Add a new translation file in `messages/`
2. Create the corresponding route in `src/app/`
3. Update the locale configuration

## 🎨 Component Architecture

The project follows atomic design principles:

-   **Atoms** - Basic building blocks (Loader, Button, etc.)
-   **Molecules** - Simple component groups (ContactForm, FAQ, etc.)
-   **Organisms** - Complex sections (Navbar, Footer, etc.)
-   **Views** - Full page components (PortfolioPage, ContactPage, etc.)

## 🔧 Configuration

### Next.js Config

Located in `next.config.ts` - Configured for static export, image optimization, and custom webpack settings.

### Tailwind Config

Located in `postcss.config.mjs` - Custom Tailwind 4 configuration with plugins.

### TypeScript

Located in `tsconfig.json` - Strict TypeScript configuration.

## 📱 Pages & Routes

The site includes the following main sections:

-   **Home** - Landing page with hero section
-   **The Studio** - About page with team information
-   **Solutions** - Services and offerings
-   **Achievements** - Portfolio showcase with project details
-   **Contact** - Contact form and location information

## 🎯 Key Features Explained

### 3D Model Viewer

Interactive 3D model viewer using React Three Fiber for showcasing products and real estate.

### Gallery Grid

Dynamic image gallery with filterable categories and smooth animations.

### Contact Form

Integrated contact form using EmailJS for seamless communication.

### Responsive Design

Fully responsive layout optimized for mobile, tablet, and desktop devices.

## 🤝 Contributing

This is a private project. For any contributions or questions, please contact the maintainers.

## 📄 License

Private project - All rights reserved.

## 👥 Team

-   **Jean** - Director
-   **Julio** - Designer
-   **Catalina** - Community Manager
-   **Carlos** - Web Developer

## 🔗 Links

-   Website: [Coming Soon]
-   Contact: [Contact Form]

---

Built with ❤️ by Paragraph Studio
