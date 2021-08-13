module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby_localization_template",
  },
  pathPrefix: "/gatsby_localization_template",
  plugins: [
  {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    }
  ]
};
