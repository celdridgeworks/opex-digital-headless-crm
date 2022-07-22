module.exports = {
  siteMetadata: {
    title: `OpexDigital Headless Wordpress`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://blog.opexdigital.com/graphql"
    }
  }]
};