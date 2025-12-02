# Detection Engineering at Scale

> Building High-Fidelity Security Operations

Static site generated from AWS re:Invent 2025 session SEC327-S, presented by Nathan Pitchaikani (Riot Games) and Andrew Krug (Datadog).

## Overview

A single-page static site providing resources and links from the AWS re:Invent 2025 session on Detection Engineering at Scale.

**Features:**
- Single HTML file with inlined and minified CSS/JS
- Datadog RUM instrumentation
- Custom domain support (shrt.cloud)
- Automatic GitHub Actions deployment
- Downloadable presentation slides
- Resource links organized by category

## Quick Start

### Prerequisites

- Node.js 16+ and npm
- Make (optional, for Makefile commands)

### Installation

```bash
# Using Make
make install

# Or directly with npm
npm install
```

### Development

```bash
# Start development server
make serve

# Or with npm
npm run serve
```

Visit `http://localhost:8080` to view the site.

### Building

```bash
# Build for production
make build

# Or with npm
npm run build
```

The site will be built to the `docs/` directory, ready for GitHub Pages deployment.

## Makefile Commands

```bash
make help        # Show all available commands
make install     # Install dependencies
make serve       # Start development server
make build       # Build production site
make clean       # Remove build artifacts
make deploy      # Build and prepare for deployment
make init        # Initialize new site (install + build)
```

## GitHub Pages Deployment

This site automatically deploys to GitHub Pages using GitHub Actions.

### Setup

1. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select **GitHub Actions**

2. **Set Custom Domain (Optional)**
   - The site is configured for `shrt.cloud`
   - In Settings → Pages → Custom domain, enter your domain
   - Ensure your DNS has a CNAME record pointing to `<username>.github.io`

3. **Deploy**
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Monitor progress in the Actions tab

### Manual Deployment

If you prefer manual deployment:

1. Build the site: `make build`
2. Commit changes: `git add docs/ && git commit -m "Deploy site"`
3. Push to GitHub: `git push`
4. In GitHub Settings → Pages, set source to "Deploy from a branch" and select `main` branch with `/docs` folder

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
├── src/
│   ├── _layouts/
│   │   └── single-page.njk # Single-page layout
│   ├── css/
│   │   └── style.css      # Datadog-themed styles
│   ├── js/
│   │   └── main.js        # Smooth scrolling & UI
│   └── index.njk          # Homepage content
├── docs/                  # Built site (GitHub Pages)
│   ├── CNAME              # Custom domain config
│   ├── index.html         # Single-page HTML with inlined CSS/JS
│   └── slides.pdf         # Presentation slides
├── CNAME                  # Custom domain (shrt.cloud)
├── slides.pdf             # Source PDF
├── .eleventy.js           # Eleventy configuration
├── package.json           # Node dependencies
├── Makefile               # Build automation
└── README.md              # This file
```

## Datadog Color Scheme

The site uses Datadog's official brand colors:

- **Purple**: `#632CA6` - Primary brand color
- **Pink**: `#FF6EC7` - Accent color
- **Blue**: `#00C9E0` - Secondary accent
- **Dark**: `#1C1B29` - Background
- **Darker**: `#0F0E17` - Deep background
- **Light**: `#F8F8F9` - Text

## Technologies

- **[Eleventy (11ty)](https://www.11ty.dev/)** - Static site generator
- **Nunjucks** - Templating engine
- **Markdown** - Content format
- **CSS** - Custom Datadog-themed styling
- **Make** - Build automation

## Resources

- [Datadog Security Labs](https://securitylabs.datadoghq.com)
- [OCSF Framework](https://schema.ocsf.io/)
- [Vector by Datadog](https://vector.dev/)
- [Stratus Red Team](https://github.com/datadog/stratus-red-team)
- [Get these slides](https://bit.ly/sec327-s)

## Speakers

**Nathan Pitchaikani**
Senior Security Engineer, Riot Games
[LinkedIn](https://linkedin.com/in/nathan-pitchaikani-221177b3)

**Andrew Krug**
Head of Security Advocacy and Research, Datadog
[LinkedIn](https://linkedin.com/in/andrewkrug)

## License

Apache License 2.0 - See [LICENSE](LICENSE) for details.

## Session Information

**AWS re:Invent 2025**
December 1-5, 2025 | Las Vegas, NV
Session: SEC327-S

© 2025 Amazon Web Services, Inc. or its affiliates. All rights reserved.
