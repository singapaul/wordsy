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
  ],
};

export default config;
