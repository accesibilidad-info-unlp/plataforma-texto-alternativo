import { buildCatalogTree } from "./catalog/builder.js";
import { isReadme } from "./catalog/path.js";

export function registerCollections (eleventyConfig) {
  const POSTS_GLOB = "src/posts/**/*.md";

  eleventyConfig.addCollection("postIndexes",
      (api) => api.getFilteredByGlob(POSTS_GLOB).filter(isReadme)
  );

  eleventyConfig.addCollection("posts",
      (api) => api.getFilteredByGlob(POSTS_GLOB).filter((file) => !isReadme(file))
  );

  eleventyConfig.addCollection("catalogTree",
      buildCatalogTree
  );
}