// https://drumlinechops.com/practice_routine
const PracticePage = require(`./page-objects/practice.page`);
const page = new PracticePage();

describe(`Practice Page`, () => {
  before(() => {
    browser.url(page.url);
  });

  describe(`first form - filtering`, () => {
    it(`should include key words`, () => {
      const text = page.formFiltering.getText();

      expect(text).to.include(`Filter By:`);
      expect(text).to.include(`Difficulty Level`);
      expect(text).to.include(`Instruments`);
      expect(text).to.include(`Topics`);
    });
  });

  describe(`signup form`, () => {
    it(`should include key words`, () => {
      const html = page.formSignup.getHTML(false);

      expect(html).to.include(`Username`);
      expect(html).to.include(`Email`);
      expect(html).to.include(`Password`);
      expect(html).to.include(`Confirm Password`);
      expect(html).to.include(`Create Account`);
    });
  });
});
