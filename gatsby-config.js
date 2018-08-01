module.exports = {
  siteMetadata: {
    title: 'SOSC',
  },
plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/contents`,
        name: 'contents',
      }
    }
  ],
}
