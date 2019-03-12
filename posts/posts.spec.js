// https://drumlinechops.com/posts/1-welcome-to-drumline-chops-2-0

const posts = require(`./posts.json`);

describe(`blog posts`, () => {
  const baseUrl = `https://drumlinechops.com/posts/`;

  posts.forEach((post, i) => {
    it(`blog post ${i + 1} of ${posts.length} should have the correct title`, () => {
      browser.url(`${baseUrl}${post.slug}`);

      const actualTitle = $(`h1.color-title-feature`).getText().trim();
      const expectedTitle = post.title;

      expect(actualTitle).to.eql(expectedTitle);
    });
  });
});
