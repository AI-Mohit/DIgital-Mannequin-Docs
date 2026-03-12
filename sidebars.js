/** @type {import('@docusaurus/types').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/overview'],
    },
    {
      type: 'category',
      label: 'Retailer Guide',
      items: ['retailer-guide/catalogue-upload'],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: ['architecture/pwa-overview'],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api-reference/products-api'],
    },
  ],
};

module.exports = sidebars;