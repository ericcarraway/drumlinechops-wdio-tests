// https://drumlinechops.com/privacy
const PrivacyPage = require(`./page-objects/privacy.page`);
const page = new PrivacyPage();

describe(`Privacy Page`, function () {
  before(function () {
    browser.url(page.url);
  });

  it(`should have the correct <h1> text`, function () {
    const expected = `Privacy`
    expect(page.h1.getText()).to.eql(expected);
  });

  describe(`text in the main content container`, function () {
    it(`should include the phrase "personal information"`, function () {
      expect(page.mainContentContainer.getText()).to.include(`personal information`);
    });

    it(`should include the phrase "subsidiaries or affiliates"`, function () {
      expect(page.mainContentContainer.getText()).to.include(`subsidiaries or affiliates`);
    });
  });
});
