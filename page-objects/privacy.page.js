// https://drumlinechops.com/privacy

class PrivacyPage {
  get url() {
    return `/privacy`;
  }
  get h1() {
    return $(`h1`);
  }
  get mainContentContainer() {
    return $(`#privacy-content`)
  }
}

module.exports = PrivacyPage;
