// https://drumlinechops.com/signup
// AKA "Unleash..."

const SignUpPage2 = require(`./page-objects/signup.page`);
const page = new SignUpPage2();

describe(`"Unleash..." Page`, () => {
  before(() => {
    browser.url(page.url);
  });

  describe(`hero text`, () => {
    it(`should include the phrase "Unleash Your Greatness"`, () => {
      const actual = page.heroText.getText();
      const expected = `Unleash Your Greatness`;

      expect(actual).to.eql(expected);
    });
  });
});
