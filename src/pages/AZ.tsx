import * as React from "react";
import { Link, HeadFC, PageProps, graphql } from "gatsby";
import LayoutComp from "../components/LayoutComp";
import * as styles from "./AZ.module.scss";

// @ts-ignore
const compare = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

const AZPage: React.FC<PageProps> = ({ data }: any) => {
  const wordArray = data.allContentfulWord.nodes;
  wordArray.sort(compare);

  return (
    <LayoutComp>
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
    </LayoutComp>
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
