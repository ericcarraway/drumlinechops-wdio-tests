// https://drumlinechops.com/about
const AboutPage = require(`./page-objects/about.page`);
const page = new AboutPage();

const baseUrl = `https://drumlinechops.com`;

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

  it(`should have the correct <h2> text`, () => {
    const expected = `Get FREE Drumline Exercises Today!`;
    expect(page.h2.getText()).to.eql(expected);
  });

  describe(`banner image`, () => {
    it(`should have the correct "src" attribute`, () => {
      const expected = `${baseUrl}/assets/banner`;
      expect(page.bannerImg.getAttribute(`src`)).to.include(expected);
    });

    it(`should be a JPG file`, () => {
      expect(page.bannerImg.getAttribute(`src`)).to.include(`.jpg`);
    });
  });

  describe(`footer`, () => {
    it(`should include the copyright`, () => {
      const expected = `© 2012-2019 Drumline Chops`;
      expect(page.footer.getText()).to.include(expected);
    });
  });
});
