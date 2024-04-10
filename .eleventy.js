module.exports = function (eleventyConfig) {
  // Zkopírovat images/ do _site/images
  eleventyConfig.addPassthroughCopy("img");

  // Zkopírovat css/ do _site/css/
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("*.js");

  // Kompilace SCSS
  eleventyConfig.addWatchTarget("./scss/"); // Sledování změn ve složce scss/
  eleventyConfig.addPassthroughCopy({ "./scss/**/*.css": "css" }); // Překlad SCSS do CSS a kopírování do _site/css/

  // Další záležitosti...

  // Následující kód zůstává nezměněný
  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  return {
    // Možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // Jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
