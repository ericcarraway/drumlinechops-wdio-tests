// https://drumlinechops.com/terms

class TermsPage {
  get url() {
    return `/terms`;
  }
  get h1() {
    return $(`h1`);
  }
  get mainContentContainer() {
    // copied layout from /privacy
    return $(`#privacy-content`);
  }
}

module.exports = TermsPage;
