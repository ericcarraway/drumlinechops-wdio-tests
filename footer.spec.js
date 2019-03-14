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

  describe(`navigation link 3 of 5 - "Terms"`, () => {
    const idx = 2;
    const text = `Terms`;
    const link = `${baseUrl}/terms`;

    it(`should have the correct text`, () => {
      expect(footer.navigationLinks[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(footer.navigationLinks[idx].$(`a`).getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`navigation link 4 of 5 - "Blog"`, () => {
    const idx = 3;
    const text = `Blog`;
    const link = `${baseUrl}/posts`;

    it(`should have the correct text`, () => {
      expect(footer.navigationLinks[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(footer.navigationLinks[idx].$(`a`).getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`navigation link 5 of 5 - "Contact"`, () => {
    const idx = 4;
    const text = `Contact`;
    const link = `${baseUrl}/contact`;

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

  describe(`social link 1 of 3 - Facebook`, () => {
    const idx = 0;
    const link = `https://www.facebook.com/DrumlineChops`;

    it(`should have the correct link`, () => {
      expect(footer.socialLinks[idx].$(`a`).getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`social link 2 of 3 - Twitter`, () => {
    const idx = 1;
    const link = `https://twitter.com/DrumlineChops`;

    it(`should have the correct link`, () => {
      expect(footer.socialLinks[idx].$(`a`).getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`social link 3 of 3 - YouTube`, () => {
    const idx = 2;
    const link = `http://www.youtube.com/user/DrumlineChopsChannel`;

    it(`should have the correct link`, () => {
      expect(footer.socialLinks[idx].$(`a`).getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`copyright`, () => {
    it(`should the correct text`, () => {
      const expected = `© 2012-2019 Drumline Chops`;
      expect(footer.copyright.getText()).to.eql(expected);
    });
  });
});
