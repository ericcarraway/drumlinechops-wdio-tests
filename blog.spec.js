// https://drumlinechops.com/posts
const BlogPage = require(`./page-objects/blog.page`);
const page = new BlogPage();

describe(`Blog Page`, () => {
  before(() => {
    browser.url(page.url);
  });

  describe(`text in the main content container`, () => {
    it(`should include the words "Video of The Week"`, () => {
      expect(page.mainContentContainer.getText()).to.include(`Video of The Week`);
    });

    it(`should include the word "Drumline"`, () => {
      expect(page.mainContentContainer.getText()).to.include(`Drumline`);
    });
  });
});
