# Adinath Dubile - Cybersecurity Portfolio

Modern, professional portfolio website showcasing multi-track cybersecurity capabilities across analyst, infosec, pentest, DFIR, and cyber-law aligned domains.

## 🚀 Live Site

Visit: [https://adinathgorakhdubile.github.io/](https://adinathgorakhdubile.github.io/)

## ✨ Features

- **Modern Tech Stack**: Built with React 19, Vite, and Tailwind CSS
- **Dark Cybersecurity Theme**: Professional design with cyber-blue accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Contact Form**: Complete with validation and error handling
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Analytics Integration**: Umami analytics for visitor tracking
- **Fast Performance**: Optimized build with code splitting

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 3.x
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx   # Navigation header
│   │   ├── Hero.jsx     # Hero section
│   │   ├── About.jsx    # About section
│   │   ├── Skills.jsx   # Skills & technologies
│   │   ├── Projects.jsx # Featured projects
│   │   ├── Contact.jsx  # Contact form
│   │   └── Footer.jsx   # Footer
│   ├── App.jsx          # Main app with error boundary
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
│   ├── Adinath_Dubile_Resume_2025.pdf
│   └── images/
├── .github/workflows/   # CI/CD workflows
└── dist/               # Production build (generated)
```

## 🚀 Development

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start dev server (with hot reload)
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
# Create production build
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'cyber-blue': '#00d9ff',
  'cyber-cyan': '#0ea5e9',
  'cyber-green': '#00ff88',
  'dark-navy': '#0a0e27',
  'dark-bg': '#111827',
}
```

### Content

- **Personal Info**: Update name, title, and contact details in respective component files
  - Search for `adinath@example.com` and replace with actual email address
  - Update in: `Header.jsx`, `Contact.jsx`, `Footer.jsx`
- **Projects**: Edit `src/components/Projects.jsx` to add/modify projects
- **Skills**: Customize skills in `src/components/Skills.jsx`
- **Resume**: Replace `public/Adinath_Dubile_Resume_2025.pdf` with your resume
- **Form Submission**: Replace the simulated form submission in `Contact.jsx` with actual backend API (FormSpree, EmailJS, etc.)

## 📦 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch using GitHub Actions.

### Manual Deployment

1. Build the project: `npm run build`
2. The `dist/` folder contains the production build
3. GitHub Actions will automatically deploy to Pages

## 🔒 Security Features

- Error boundary for graceful error handling
- Form validation to prevent XSS
- Secure external links with `rel="noopener noreferrer"`
- No inline scripts (CSP-friendly)

## 📄 License

© 2026 Adinath Dubile. All rights reserved.

## 🤝 Contact

- **Email**: adinath@example.com
- **GitHub**: [@adinathgorakhdubile](https://github.com/adinathgorakhdubile)

---

Built with ❤️ using React & Tailwind CSS
