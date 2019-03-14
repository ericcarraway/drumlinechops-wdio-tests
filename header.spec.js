// https://drumlinechops.com/
const Header = require(`./page-objects/header.page`);
const header = new Header();

describe(`header`, () => {
  before(() => {
    browser.url(`/`);
  });

  describe(`header text`, () => {
    it(`should include key words`, () => {
      const headerText = header.navbar.getText();

      expect(headerText).to.include(`Home`);
      expect(headerText).to.include(`About`);
      expect(headerText).to.include(`Lessons`);
      expect(headerText).to.include(`Practice`);
      expect(headerText).to.include(`Blog`);

      expect(headerText).to.include(`Signup`);
      expect(headerText).to.include(`Login`);
    });
  });

  describe(`logo`, () => {
    it(`should be a PNG file`, () => {
      expect(header.logo.getAttribute(`src`)).to.include(`.png`);
    });

    it(`should come from the correct directory`, () => {
      const expected = `/assets/logo/`;
      expect(header.logo.getAttribute(`src`)).to.include(expected);
    });
  });
});
