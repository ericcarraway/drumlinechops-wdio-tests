// https://drumlinechops.com/terms
const TermsPage = require(`./page-objects/terms.page`);
const page = new TermsPage();

describe(`Terms Page`, function () {
  before(function () {
    browser.url(page.url);
  });

  it(`should have the correct <h1> text`, function () {
    const expected = `Terms`
    expect(page.h1.getText()).to.eql(expected);
  });

  describe(`text in the main content container`, function () {
    it(`should include the phrase "Terms of Use"`, function () {
      expect(page.mainContentContainer.getText()).to.include(`Terms of Use`);
    });

    it(`should include the phrase "All rights reserved"`, function () {
      expect(page.mainContentContainer.getText()).to.include(`All rights reserved`);
    });
  });
});
