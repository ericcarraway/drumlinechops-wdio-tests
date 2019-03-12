// https://drumlinechops.com/users/sign_up

class SignUpPage {
  get url() {
    return `/users/sign_up`;
  }
  get form() {
    return $(`form`);
  }
}

module.exports = SignUpPage;
