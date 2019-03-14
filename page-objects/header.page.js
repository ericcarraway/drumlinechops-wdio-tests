class Header {
  get navbar() {
    return $(`.navbar`);
  }

  get logo() {
    return $(`.navbar img`);
  }

  get links() {
    return $$(`.navbar a`);
  }
}

module.exports = Header;
