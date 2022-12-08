module.exports = function (eleventyConfig) {

    const md = require("markdown-it")();
    const markdownItAttrs = require("markdown-it-attrs");
    const mdLib = md.use(markdownItAttrs);

    eleventyConfig.setLibrary("md", mdLib);

    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/fonts");

    eleventyConfig.addPassthroughCopy("manifesto");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "docs"
        }
    };
};
