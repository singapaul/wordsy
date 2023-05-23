import * as React from "react";
import { Link, HeadFC, PageProps, graphql } from "gatsby";
import Page from "../components/Layout/Page";
import * as styles from "./AZ.module.scss";

const AZPage: React.FC<PageProps> = ({ data }: any) => {
  const wordArray = data.allContentfulWord.nodes;
  return (
    <Page className={styles.body}>
      <ul className={styles.list}>
        {wordArray.map((word: any) => {
          return (
            <li>
              <Link className={styles.wordLink} to={`/${word.slug}`}>
                {word.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Page>
  );
};

export default AZPage;

export const Head: HeadFC = () => <title>A-Z</title>;

export const query = graphql`
  {
    allContentfulWord {
      nodes {
        contentful_id
        title
        slug
      }
    }
  }
`;
