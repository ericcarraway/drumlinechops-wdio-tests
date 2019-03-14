// https://drumlinechops.com/
const Footer = require(`./page-objects/footer.page`);
const footer = new Footer();

const baseUrl = `https://drumlinechops.com`;

describe(`footer`, () => {
  before(() => {
    browser.url(`/`);
  });

  describe(`footer text`, () => {
    it(`should include key words`, () => {
      const footerText = footer.wrapper.getText();

      expect(footerText).to.include(`About`);
      expect(footerText).to.include(`Privacy`);
      expect(footerText).to.include(`Terms`);
      expect(footerText).to.include(`Blog`);
      expect(footerText).to.include(`Contact`);

      expect(footerText).to.include(`© 2012-2019 Drumline Chops`);
    });
  });

  describe(`navigation links`, () => {
    it(`should have five links`, () => {
      expect(footer.navigationLinks.length).to.eql(5);
    });
  });

  describe(`navigation link 1 of 5 - "About"`, () => {
    const idx = 0;
    const text = `About`;
    const link = `${baseUrl}/about`;

    it(`should have the correct text`, () => {
      expect(footer.navigationLinks[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(footer.navigationLinks[idx].$(`a`).getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`navigation link 2 of 5 - "Privacy"`, () => {
    const idx = 1;
    const text = `Privacy`;
    const link = `${baseUrl}/privacy`;

    it(`should have the correct text`, () => {
      expect(footer.navigationLinks[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(footer.navigationLinks[idx].$(`a`).getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`social links`, () => {
    it(`should have three links`, () => {
      expect(footer.socialLinks.length).to.eql(3);
    });
  });

  describe(`copyright`, () => {
    it(`should the correct text`, () => {
      const expected = `© 2012-2019 Drumline Chops`;
      expect(footer.copyright.getText()).to.eql(expected);
    });
  });
});
