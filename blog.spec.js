// https://drumlinechops.com/posts
const BlogPage = require(`./page-objects/blog.page`);
const page = new BlogPage();

describe(`Blog Page`, function () {
  before(function () {
    browser.url(page.url);
  });

  describe(`text in the main content container`, function () {
    it(`should include the words "Video of The Week"`, function () {
      expect(page.mainContentContainer.getText()).to.include(`Video of The Week`);
    });

    it(`should include the word "Drumline"`, function () {
      expect(page.mainContentContainer.getText()).to.include(`Drumline`);
    });
  });
});
