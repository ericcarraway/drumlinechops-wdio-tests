// https: //drumlinechops.com/

const Footer = require(`./page-objects/footer.page`);
const footer = new Footer();

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
});
