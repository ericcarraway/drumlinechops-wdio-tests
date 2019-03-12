// https://drumlinechops.com/users/sign_up
const SignUpPage = require(`./page-objects/sign-up.page`);
const page = new SignUpPage();

describe(`"Sign Up" Page`, () => {
  before(() => {
    browser.url(page.url);
  });

  describe(`form`, () => {
    it(`should include the phrase "Create Account"`, () => {
      const html = page.form.getHTML(false);
      expect(html).to.include(`Create Account`);
    });
  });
});
