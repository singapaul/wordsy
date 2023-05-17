import Page from "../components/Layout/Page";
import { graphql } from "gatsby";
import React from "react";

// @ts-ignore
const WordPage = ({ data }: any) => {
  const { contentfulWord } = data;

  return (
    <Page>
      <p>{contentfulWord.title}</p>
      <p>{contentfulWord.definition}</p>
      <p>{contentfulWord.countryOfOrigin}</p>
      <p>{contentfulWord.phoneticSpelling}</p>
    </Page>
  );
};

export default WordPage;

export const query = graphql`
  query thisCouldBeAnyText($id: String!) {
    contentfulWord(contentful_id: { eq: $id }) {
      title
      definition
      countryOfOrigin
      phoneticSpelling
    }
  }
`;
