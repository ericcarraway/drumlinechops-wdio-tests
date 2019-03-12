// https://drumlinechops.com/posts

class Blog {
  get url() {
    return `/posts`;
  }
  get mainContentContainer() {
    return $(`#main-content`);
  }
}

module.exports = Blog;
