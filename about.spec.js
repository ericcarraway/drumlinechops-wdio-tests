// https://drumlinechops.com/about
const AboutPage = require(`./page-objects/about.page`);
const page = new AboutPage();

describe(`About Page`, () => {
  before(() => {
    browser.url(page.url);
  });

  it(`should have the correct <h1> text`, () => {
    const expected = `About`;
    expect(page.h1.getText()).to.eql(expected);
  });

  describe(`main content`, () => {
    it(`should include key words`, () => {
      expect(page.mainContent.getText()).to.include(`marching percussion`);
      expect(page.mainContent.getText()).to.include(`teaching`);
      expect(page.mainContent.getText()).to.include(`drumline`);
      expect(page.mainContent.getText()).to.include(`world-class tools and resources`);
    });

    it(`should include five paragraphs`, () => {
      expect(page.mainContent.$$(`p`).length).to.eql(5);
    });
  });
});
