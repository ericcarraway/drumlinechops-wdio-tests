// https://drumlinechops.com/privacy
const PrivacyPage = require(`./page-objects/privacy.page`);
const page = new PrivacyPage();

describe(`Privacy Page`, () => {
  before(() => {
    browser.url(page.url);
  });

  it(`should have the correct <h1> text`, () => {
    const expected = `Privacy`;
    expect(page.h1.getText()).to.eql(expected);
  });

  describe(`text in the main content container`, () => {
    it(`should include the phrase "personal information"`, () => {
      expect(page.mainContentContainer.getText()).to.include(`personal information`);
    });

    it(`should include the phrase "subsidiaries or affiliates"`, () => {
      expect(page.mainContentContainer.getText()).to.include(`subsidiaries or affiliates`);
    });
  });
});
