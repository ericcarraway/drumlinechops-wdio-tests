class Footer {
  get wrapper() {
    return $(`footer`);
  }

  get navigationLinks() {
    return $$(`.footer-menu ul:first-child li`);
  }

  get socialLinks() {
    return $$(`footer ul#socials li`);
  }

  get copyright() {
    return $(`footer p`);
  }
}

module.exports = Footer;
