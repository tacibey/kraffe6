// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "About Us", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Contact Us", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Products", url: "/products" },
      { name: "Equipment", url: "/products" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "Contact Us", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/kraffe.roasters",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
