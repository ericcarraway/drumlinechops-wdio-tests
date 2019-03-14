class Header {
  get navbar() {
    return $(`.navbar`);
  }

  get logo() {
    return $(`.navbar img`);
  }
}

module.exports = Header;
