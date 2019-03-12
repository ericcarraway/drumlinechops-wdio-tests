// https://drumlinechops.com/practice_routine

class PracticePage {
  get url() {
    return `/practice_routine`;
  }
  get formFiltering() {
    return $$(`form`)[0];
  }
  get formSignup() {
    return $$(`form`)[1];
  }
}

module.exports = PracticePage;
