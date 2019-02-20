module.exports = {
  siteMetadata: {
    name: `Jordyn Marcellus`,
    title: `Testing a React web applicaiton with JavaScript`,
    date: `March 30th, 2019`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
