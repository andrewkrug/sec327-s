# Quick Start Guide

Get your Detection Engineering at Scale site up and running in minutes.

## Prerequisites

- **Node.js** 16 or higher
- **npm** (comes with Node.js)
- **Make** (optional, but recommended)

## Installation

### Option 1: Using Make (Recommended)

```bash
# Install dependencies and build the site
make init
```

### Option 2: Using npm directly

```bash
# Install dependencies
npm install

# Build the site
npm run build
```

## Development

### Start the development server

```bash
# Using Make
make serve

# Using npm
npm run serve
```

Visit **http://localhost:8080** to view the site locally.

The development server will automatically reload when you make changes to files.

## Building for Production

```bash
# Using Make
make build

# Using npm
npm run build
```

The site will be built to the `docs/` directory.

## Deploying to GitHub Pages

1. **Build the site**
   ```bash
   make build
   ```

2. **Commit the changes**
   ```bash
   git add .
   git commit -m "Build site for GitHub Pages"
   ```

3. **Push to GitHub**
   ```bash
   git push origin main
   ```

4. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select branch: **main**
   - Select folder: **/docs**
   - Click **Save**

5. **Access your site**
   - Your site will be available at `https://[username].github.io/[repository-name]/`
   - It may take a few minutes for the site to deploy

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

## Project Structure

```
reinvent-micro/
├── src/                      # Source files
│   ├── _layouts/            # Page templates
│   │   └── base.njk        # Base template
│   ├── css/                # Stylesheets
│   │   └── style.css      # Main styles (Datadog themed)
│   ├── index.md            # Homepage
│   ├── detection-as-code/  # DaC content
│   ├── data-pipeline/      # Pipeline content
│   ├── correlation/        # Correlation content
│   ├── ocsf/              # OCSF content
│   └── resources/         # Resources page
├── docs/                   # Built site (GitHub Pages)
├── .eleventy.js           # Eleventy configuration
├── package.json           # Dependencies
├── Makefile              # Build automation
├── README.md             # Documentation
├── LICENSE               # Apache 2.0 license
└── QUICKSTART.md         # This file
```

## Customization

### Editing Content

All content is in Markdown format in the `src/` directory. Simply edit the `.md` files and rebuild.

### Modifying Styles

The site uses Datadog's color scheme defined in `src/css/style.css`. Edit CSS variables to customize:

```css
:root {
  --dd-purple: #632CA6;
  --dd-pink: #FF6EC7;
  --dd-blue: #00C9E0;
  --dd-dark: #1C1B29;
}
```

### Adding Pages

1. Create a new `.md` file in `src/`
2. Add front matter with layout and title
3. Write content in Markdown
4. Add link to navigation in `src/_layouts/base.njk`

## Troubleshooting

### Port already in use

If port 8080 is already in use, Eleventy will try the next available port automatically.

### Build fails

Make sure you're using Node.js 16 or higher:

```bash
node --version
```

### Clean build

If you encounter issues, try a clean build:

```bash
make clean
make build
```

## Getting Help

- **Documentation**: See [README.md](README.md)
- **Eleventy Docs**: https://www.11ty.dev/docs/
- **Issues**: Report issues on GitHub

## Next Steps

- Customize the content for your needs
- Add more pages
- Deploy to GitHub Pages
- Share with your team

Happy building! 🚀
