const path = require("path");

// @ts-ignore
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter

  const {
    data: {
      allWordsJson: { nodes: words },
    },
  } = await graphql(`
    {
      allWordsJson {
        nodes {
          __typename
          id
          slug
        }
      }
    }
  `);

  const data2 = await graphql(`
    {
      allContentfulWord {
        nodes {
          contentful_id
          slug
        }
      }
    }
  `);
  console.log("sand");
  //   console.log(data2.data.allContentfulWord.nodes);
  const data3 = data2.data.allContentfulWord.nodes;
  const productTemplate = path.resolve("./src/templates/word.tsx");

  console.log("cheddaar");
  console.log(data3);
  // Creates each page
  // @ts-ignore
  data3.forEach((word) => {
    createPage({
      path: word.slug,
      component: productTemplate,
      // We are not sending content, we are sending an ID for each page to get its own content
      context: {
        id: word.contentful_id,
      },
    });
  });
};
