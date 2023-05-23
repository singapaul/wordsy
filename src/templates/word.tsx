import Page from "../components/Layout/Page";
import { graphql } from "gatsby";
import React from "react";
import * as styles from "./word.module.scss";
import Bars from "../animations/bars";
import useDarkMode from "use-dark-mode";

// @ts-ignore
const WordPage = ({ data }: any) => {
  const darkMode = useDarkMode(true);
  const getValue = () => {
    console.log("Go to a random page route");
  };

  const { contentfulWord } = data;

  return (
    <Page className={styles.body}>
      <h1 className={styles.heading}>{contentfulWord.title}</h1>
      <h2 className={styles.subHeading}>{contentfulWord.phoneticSpelling}</h2>
      <h3 className={styles.countryHeading}>
        {contentfulWord.countryOfOrigin}
      </h3>
      <p className={styles.text}>{contentfulWord.definition}</p>
      <Bars />
      <button
        className={darkMode.value ? styles.darkButton : styles.lightButton}
        onClick={getValue}
      >
        Shuffle
      </button>
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
