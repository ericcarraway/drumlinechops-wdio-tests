// https://drumlinechops.com/terms
const TermsPage = require(`./page-objects/terms.page`);
const page = new TermsPage();

describe(`Terms Page`, () => {
  before(() => {
    browser.url(page.url);
  });

  it(`should have the correct <h1> text`, () => {
    const expected = `Terms`
    expect(page.h1.getText()).to.eql(expected);
  });

  describe(`text in the main content container`, () => {
    it(`should include the phrase "Terms of Use"`, () => {
      expect(page.mainContentContainer.getText()).to.include(`Terms of Use`);
    });

    it(`should include the phrase "All rights reserved"`, () => {
      expect(page.mainContentContainer.getText()).to.include(`All rights reserved`);
    });
  });
});
