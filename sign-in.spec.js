// https://drumlinechops.com/users/sign_in
const SignInPage = require(`./page-objects/sign-in.page`);
const page = new SignInPage();

describe(`Login Page`, () => {
  before(() => {
    browser.url(page.url);
  });

  describe(`form`, () => {
    it(`should include the word "Login"`, () => {
      const html = page.form.getHTML(false);
      expect(html).to.include(`Login`);
    });
  });
});
