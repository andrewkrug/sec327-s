.PHONY: install build serve clean deploy help

# Default target
.DEFAULT_GOAL := help

## install: Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

## build: Build the static site
build: clean
	@echo "Building site..."
	npm run build

## serve: Start local development server
serve:
	@echo "Starting development server..."
	npm run serve

## clean: Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	npm run clean

## deploy: Build and prepare for GitHub Pages deployment
deploy: build
	@echo "Site built and ready for GitHub Pages deployment"
	@echo "Commit and push the docs/ directory to deploy"
	@echo ""
	@echo "Run: git add docs/ && git commit -m 'Deploy site' && git push"

## init: Initialize new site (install + build)
init: install build
	@echo "Site initialized successfully"

## help: Show this help message
help:
	@echo "Detection Engineering at Scale - Site Operations"
	@echo ""
	@echo "Available targets:"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/ /'
