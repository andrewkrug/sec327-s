const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // Filter to read and inline CSS
  eleventyConfig.addFilter("inlineCSS", function(filepath) {
    const cssPath = path.join(__dirname, 'src', filepath);
    const css = fs.readFileSync(cssPath, 'utf8');
    // Simple minification: remove comments, extra whitespace, and newlines
    return css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/\s*([{}:;,])\s*/g, '$1') // Remove space around punctuation
      .trim();
  });

  // Filter to inline JS
  eleventyConfig.addFilter("inlineJS", function(filepath) {
    const jsPath = path.join(__dirname, 'src', filepath);
    if (fs.existsSync(jsPath)) {
      const js = fs.readFileSync(jsPath, 'utf8');
      // Simple minification
      return js
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
        .replace(/\/\/.*/g, '') // Remove line comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .trim();
    }
    return '';
  });

  // Copy PDF to output directory
  eleventyConfig.addPassthroughCopy("slides.pdf");

  // Copy CNAME file for custom domain
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
