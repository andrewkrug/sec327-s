# Detection Engineering at Scale

> Building High-Fidelity Security Operations

Static site generated from AWS re:Invent 2025 session SEC327-S, presented by Nathan Pitchaikani (Riot Games) and Andrew Krug (Datadog).

## Overview

This site covers modern approaches to detection engineering at scale, including:

- **Detection as Code (DaC)** - Applying SDLC principles to security detections
- **Data Pipeline Optimization** - Using Vector for efficient log processing
- **SIEM Optimization** - Cost-effective archiving and rehydration strategies
- **Behavioral & Correlation Detection** - Reducing false positives
- **Open Standards** - OCSF for unified security telemetry

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

This site is configured to deploy to GitHub Pages from the `docs/` directory:

1. Build the site: `make build`
2. Commit changes: `git add docs/ && git commit -m "Deploy site"`
3. Push to GitHub: `git push`
4. In GitHub Settings → Pages, set source to "Deploy from a branch" and select `main` branch with `/docs` folder

## Project Structure

```
.
├── src/                    # Source files
│   ├── _layouts/          # Eleventy layouts
│   ├── css/               # Stylesheets
│   ├── index.md           # Homepage
│   ├── detection-as-code/ # DaC content
│   ├── data-pipeline/     # Data pipeline content
│   ├── correlation/       # Correlation detection content
│   ├── ocsf/              # OCSF content
│   └── resources/         # Resources and links
├── docs/                  # Built site (GitHub Pages)
├── .eleventy.js          # Eleventy configuration
├── package.json          # Node dependencies
├── Makefile              # Build automation
└── README.md             # This file
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
