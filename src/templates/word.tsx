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
      {/* <p className={styles.text}>{contentfulWord.definition}</p> */}
      <p className={styles.text}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
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
