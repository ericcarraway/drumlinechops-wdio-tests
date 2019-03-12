// https://drumlinechops.com/lessons

class LessonsPage {
  get url() {
    return `/lessons`;
  }
  get h1() {
    return $(`h1`);
  }
  get formFiltering() {
    return $$(`form`)[0];
  }
  get formSignup() {
    return $$(`form`)[1];
  }
}

module.exports = LessonsPage;
