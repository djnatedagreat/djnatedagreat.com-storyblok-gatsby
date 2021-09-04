module.exports = {
  siteMetadata: {
    title: `DJ Nate Da Great`,
    description: `DJ, turnt-tablist, thinker, maker, coder, etc… Been doing this DJ thing for 30+ years. Been doing this human-being thing for 40+ years. First and foremost I’m a creative thinker. I appreciate artistry, thinking outside the box and the creative process. I prefer to take the path less traveled. That actually happens sometimes.`,
    author: `@djnatedagreat`,
    image: `/images/nate.jpg`, // Path to your image you placed in the 'static' folder
    siteurl: 'http://djnatedagreat.com'
  },
  plugins: [
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        //postCssPlugins: [somePostCssPlugin()],
	includePaths: ["src/bootstrap/custom.scss"],
        precision: 6,
      },
    },
    `gatsby-plugin-favicon`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
       resolve: 'gatsby-source-storyblok',
       options: {
          accessToken: '9O6O6sl0fmbOdP3vnOKwiwtt',
          homeSlug: 'home',
	  version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
       }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-155754892-1",
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
