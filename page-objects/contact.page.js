// https://drumlinechops.com/contact

class Contact {
  get url() {
    return `/contact`;
  }
  get h1() {
    return $(`h1`);
  }
  get btnSubmit() {
    return $(`form button`);
  }
}

module.exports = Contact;
