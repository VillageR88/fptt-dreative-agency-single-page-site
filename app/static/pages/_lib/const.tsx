let basePath = '/fptt-scoot-multi-page-website';
if (process.env.NODE_ENV === 'development') {
  basePath = '';
}

export const routes = {
  home: `${basePath}/`,
  about: `${basePath}/about`,
  location: `${basePath}/location`,
  careers: `${basePath}/careers`,
};

export const navLinks = [
  { href: routes.about, text: 'About' },
  { href: routes.location, text: 'Location' },
  { href: routes.careers, text: 'Careers' },
];
