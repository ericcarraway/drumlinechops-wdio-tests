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
    const idx = 0;
    const text = ``;
    const link = `https://drumlinechops.com/`;

    it(`should have the correct text`, () => {
      expect(header.links[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(header.links[idx].getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`link 2 of 8 - "Home"`, () => {
    const idx = 1;
    const text = `Home`;
    const link = `https://drumlinechops.com/`;

    it(`should have the correct text`, () => {
      expect(header.links[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(header.links[idx].getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`link 3 of 8 - "About"`, () => {
    const idx = 2;
    const text = `About`;
    const link = `https://drumlinechops.com/about`;

    it(`should have the correct text`, () => {
      expect(header.links[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(header.links[idx].getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`link 4 of 8 - "Lessons"`, () => {
    const idx = 3;
    const text = `Lessons`;
    const link = `https://drumlinechops.com/lessons`;

    it(`should have the correct text`, () => {
      expect(header.links[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(header.links[idx].getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`link 5 of 8 - "Practice"`, () => {
    const idx = 4;
    const text = `Practice`;
    const link = `https://drumlinechops.com/practice_routine`;

    it(`should have the correct text`, () => {
      expect(header.links[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(header.links[idx].getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`link 6 of 8 - "Blog"`, () => {
    const idx = 5;
    const text = `Blog`;
    const link = `https://drumlinechops.com/posts`;

    it(`should have the correct text`, () => {
      expect(header.links[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(header.links[idx].getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`link 7 of 8 - "Signup" button`, () => {
    const idx = 6;
    const text = `Signup`;
    const link = `https://drumlinechops.com/users/sign_up`;

    it(`should have the correct text`, () => {
      expect(header.links[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(header.links[idx].getAttribute(`href`)).to.eql(link);
    });
  });

  describe(`link 8 of 8 - "Login" button`, () => {
    const idx = 7;
    const text = `Login`;
    const link = `https://drumlinechops.com/users/sign_in`;

    it(`should have the correct text`, () => {
      expect(header.links[idx].getText()).to.eql(text);
    });

    it(`should have the correct link`, () => {
      expect(header.links[idx].getAttribute(`href`)).to.eql(link);
    });
  });
});
