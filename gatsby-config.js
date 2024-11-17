module.exports = {
  siteMetadata: {
    title: 'SOSC',
    siteUrl: 'https://sosc.org.in',
    events: {
      title: 'SOSC - Events',
      siteUrl: 'https://sosc.org.in/events',
    },
    reports: {
      title: 'SOSC - Reports',
      siteUrl: 'https://sosc.org.in/reports',
    },
    team: {
      title: 'SOSC - Team',
      siteUrl: 'https://sosc.org.in/team',
    },
    blog: {
      title: 'SOSC - Blog',
      siteUrl: 'https://sosc.org.in/blog',
    },
    memberDetails: {
      title: 'SOSC - Member Details',
      siteUrl: 'https://sosc.org.in/member-details',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-101997744-5',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `green`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sahyadri Open Source Community',
        description: 'The official sosc website',
        short_name: 'SOSC',
        start_url: '/',
        background_color: '#FFF', //background color in splash screen
        theme_color: '#FFF', //navbar color
        lang: 'en',
        display: 'standalone',
        icon: 'src/images/logo_circle.png',
        icons: [
          // Add or remove icon sizes as desired
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
  ],
}
