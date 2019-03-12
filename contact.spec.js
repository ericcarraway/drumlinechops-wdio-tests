// https://drumlinechops.com/contact
const ContactPage = require(`./page-objects/contact.page`);
const page = new ContactPage();

describe(`Contact Page`, function () {
  before(function () {
    browser.url(page.url);
  });

  it(`should have the correct <h1> text`, function () {
    const expected = `Contact`
    expect(page.h1.getText()).to.eql(expected);
  });

  it(`should have the correct submit button text`, function () {
    const expected = `Send Message`
    expect(page.btnSubmit.getText()).to.eql(expected);
  });
});
