import * as React from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import Page from "../components/Layout/Page";
import * as styles from "./home.module.scss";
import useDarkMode from "use-dark-mode";

const IndexPage: React.FC<PageProps> = ({ data }: any) => {
  const darkMode = useDarkMode(true);
  const wordArray = data.allContentfulWord.nodes;
  const randomWord =
    wordArray[Math.floor(Math.random() * wordArray.length)].slug;
  return (
    <Page className={styles.body}>
      <h1 className={styles.heading}>WORDY</h1>
      <h2 className={styles.subHeading}>Really silly words</h2>
      <p className={styles.text}>
        Inspired by a conversation between a Spaniard and a Welshman in a
        Hungarian bar over the meaning of a Finnish term for getting drunk at
        home alone in your underpants. WORDY was created to help humanity learn
        more silly words.
      </p>
      <Link to={`${randomWord}`}>
        <button
          className={darkMode.value ? styles.darkButton : styles.lightButton}
        >
          Show me a word
        </button>
      </Link>
    </Page>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;

export const query = graphql`
  {
    allContentfulWord {
      nodes {
        slug
      }
    }
  }
`;
