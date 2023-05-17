import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Page from "../Components/Page";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Page>
      <main>AN EMPTY PAGE FOR NOW!</main>
    </Page>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
