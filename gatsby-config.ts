import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `badlanguage`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "clau520o6xa1",
        environment: "master",
        accessToken: "W8E-HjhDsGEOvAdcVgXQNy-FiO3X3ssEVgU0uIoyGyM",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-use-dark-mode",
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Staatliches",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Staatliches",
          },
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Roboto",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Roboto",
          },
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Playfair Display",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Playfair+Display",
          },
          {
            name: "Quattrocento",
            file: "https://fonts.googleapis.com/css2?family=Quattrocento&display=swap",
          },
        ],
      },
    },
  ],
};

export default config;
