import LayoutComp from "../components/LayoutComp";
import { HeadFC, Link, graphql } from "gatsby";
import React from "react";
import * as styles from "./word.module.scss";
import Bars from "../animations/bars";
import useDarkMode from "use-dark-mode";

// @ts-ignore
const WordPage = ({ data }: any) => {
  const darkMode = useDarkMode(true);

  const { contentfulWord } = data;
  const wordlist = data.allContentfulWord.nodes;
  const randomWord = wordlist[Math.floor(Math.random() * wordlist.length)].slug;

  return (
    <LayoutComp className={styles.body}>
      <h1 className={styles.heading}>{contentfulWord.title}</h1>
      <h2 className={styles.subHeading}>{contentfulWord.phoneticSpelling}</h2>
      <h3 className={styles.countryHeading}>
        {contentfulWord.countryOfOrigin}
      </h3>
      <p className={styles.text}>{contentfulWord.definition}</p>
      {/* <Bars /> */}
      <Link to={`/${randomWord}`}>
        <button
          className={darkMode.value ? styles.darkButton : styles.lightButton}
        >
          Shuffle
        </button>
      </Link>
    </LayoutComp>
  );
};

export default WordPage;

export const Head: HeadFC = () => <title>WORDY</title>;

export const query = graphql`
  query thisCouldBeAnyText($id: String!) {
    contentfulWord(contentful_id: { eq: $id }) {
      title
      definition
      countryOfOrigin
      phoneticSpelling
    }
    allContentfulWord {
      nodes {
        contentful_id
        slug
      }
    }
  }
`;
