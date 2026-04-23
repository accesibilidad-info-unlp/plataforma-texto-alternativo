export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/css": "css",
        "src/js": "js",
        "src/assets": "assets"
    });

    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/**/*.md");
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },

        templateFormats: ["md", "njk", "html"],

        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
}