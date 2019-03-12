// https://drumlinechops.com/about
const AboutPage = require(`./page-objects/about.page`);
const page = new AboutPage();

describe(`About Page`, function () {
  before(function () {
    browser.url(page.url);
  });

  it(`should have the correct <h1> text`, function () {
    const expected = `About`
    expect(page.h1.getText()).to.eql(expected);
  });
});
