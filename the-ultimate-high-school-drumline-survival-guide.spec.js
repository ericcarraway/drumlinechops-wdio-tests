// https: //drumlinechops.com/the-ultimate-high-school-drumline-survival-guide

const Header = require(`./page-objects/header.page`);
const Footer = require(`./page-objects/footer.page`);

const header = new Header();
const footer = new Footer();

describe(`The Ultimate...`, () => {
  before(() => {
    browser.url(`/the-ultimate-high-school-drumline-survival-guide`);
  });

  it(`should have the correct <h1> text`, () => {
    const actual = $(`h1.color-title-feature`).getText();
    const expected = `The Ultimate High School Drumline Survival Guide`;

    expect(actual).to.eql(expected);
  });

  describe(`header`, () => {
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

    it.skip(`should fail`, () => {
      const headerText = header.navbar.getText();

      expect(headerText).to.include(`Homez`);
    });
  });

  describe(`footer`, () => {
    it(`should include key words`, () => {
      const footerText = footer.wrapper.getText();

      expect(footerText).to.include(`About`);
      expect(footerText).to.include(`Privacy`);
      expect(footerText).to.include(`Terms`);
      expect(footerText).to.include(`Blog`);
      expect(footerText).to.include(`Contact`);

      expect(footerText).to.include(`© 2012-2019 Drumline Chops`);
    });

    it.skip(`should fail`, () => {
      const footerText = footer.wrapper.getText();

      expect(footerText).to.include(`Aboutz`);
    });
  });
});
