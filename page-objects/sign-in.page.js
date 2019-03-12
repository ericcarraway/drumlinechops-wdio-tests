// https://drumlinechops.com/users/sign_in

class SignInPage {
  get url() {
    return `/users/sign_in`;
  }
  get form() {
    return $(`form`);
  }
}

module.exports = SignInPage;
