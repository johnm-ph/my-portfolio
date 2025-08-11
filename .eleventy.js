module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css"); // copy CSS as-is. This sets where 11ty looks for I/O

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
