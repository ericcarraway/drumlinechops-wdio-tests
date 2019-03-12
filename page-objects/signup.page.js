// https://drumlinechops.com/signup
// AKA "Unleash..."

class SignUpPage2 {
  get url() {
    return `/signup`;
  }
  get heroText() {
    return $$(`h1`)[0];
  }
}

module.exports = SignUpPage2;
