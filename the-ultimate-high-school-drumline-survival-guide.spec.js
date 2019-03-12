// https: //drumlinechops.com/the-ultimate-high-school-drumline-survival-guide

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

  });

  describe(`footer`, () => {

  });
});
