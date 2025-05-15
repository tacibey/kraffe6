
const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "À propos", url: "/fr/about" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
     
      { name: "Produits", url: "/fr/products" },
 
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "/fr/about" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Contact", url: "/contact" },
    
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/kraffe.roasters",
  x: "#",
  github: "#",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
