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
  get h2() {
    return $(`h2`);
  }
  get bannerImg() {
    return $(`#banner`);
  }
  get footer() {
    return $(`footer`);
  }
}

module.exports = About;
