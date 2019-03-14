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

  describe(`links`, () => {
    it(`should have eight links`, () => {
      expect(header.links.length).to.eql(8);
    });
  });

  // logo
  describe(`link 1 of 8 - logo`, () => {
    it(`should link to the homepage`, () => {
      const expected = `https://drumlinechops.com/`;
      expect(header.links[0].getAttribute(`href`)).to.eql(expected);
    });
  });

  describe(`link 2 of 8 - "Home"`, () => {
    it(`should link to the homepage`, () => {
      const expected = `https://drumlinechops.com/`;
      expect(header.links[1].getAttribute(`href`)).to.eql(expected);
    });
  });

  describe(`link 3 of 8 - "About"`, () => {
    it(`should link to "/about"`, () => {
      const expected = `https://drumlinechops.com/about`;
      expect(header.links[2].getAttribute(`href`)).to.eql(expected);
    });
  });

  describe(`link 4 of 8 - "Lessons"`, () => {
    it(`should link to "/lessons"`, () => {
      const expected = `https://drumlinechops.com/lessons`;
      expect(header.links[3].getAttribute(`href`)).to.eql(expected);
    });
  });

  describe(`link 5 of 8 - "Practice"`, () => {
    it(`should link to "/practice_routine"`, () => {
      const expected = `https://drumlinechops.com/practice_routine`;
      expect(header.links[4].getAttribute(`href`)).to.eql(expected);
    });
  });

  describe(`link 6 of 8 - "Blog"`, () => {
    it(`should link to "/posts"`, () => {
      const expected = `https://drumlinechops.com/posts`;
      expect(header.links[5].getAttribute(`href`)).to.eql(expected);
    });
  });

  describe(`link 7 of 8 - "Signup" button`, () => {
    it(`should link to "users/sign_up"`, () => {
      const expected = `https://drumlinechops.com/users/sign_up`;
      expect(header.links[6].getAttribute(`href`)).to.eql(expected);
    });
  });

  describe(`link 8 of 8 - "Login" button`, () => {
    it(`should link to "users/sign_in"`, () => {
      const expected = `https://drumlinechops.com/users/sign_in`;
      expect(header.links[7].getAttribute(`href`)).to.eql(expected);
    });
  });
});
