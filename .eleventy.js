import { registerCollections } from "./config/collections.js";

export default function (eleventyConfig) {
  // árbol de posts
  eleventyConfig.addPassthroughCopy("src/posts");
  // assets globales
  eleventyConfig.addPassthroughCopy({
    "src/css": "css",
    "src/js": "js",
    "src/assets": "assets",
  });

  registerCollections(eleventyConfig);

  return {
    pathPrefix: "/plataforma-texto-alternativo",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
