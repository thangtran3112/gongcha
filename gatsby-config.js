/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /**Your site config here */
  siteMetadata: {
    title: 'Gong Cha Kelowna',
    description: 'Gong Cha Kelow website',
    author: '@thangtran3112',
    person: {name: 'thang', age: 36},
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: 'john', age: 32 },
      { name: 'susan', age: 21 }
    ],
  },
  plugins: [ 
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // The unique name for each instance
        name: 'images',
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    }
  ],
}
