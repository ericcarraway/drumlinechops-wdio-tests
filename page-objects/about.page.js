// https://drumlinechops.com/about

class About {
  get url() {
    return `/about`;
  }
  get h1() {
    return $(`h1.color-title-feature`);
  }
  get mainContent() {
    return $(`#about-content`);
  }
}

module.exports = About;
