module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/styles');
    eleventyConfig.addPassthroughCopy('./src/static');
    
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
