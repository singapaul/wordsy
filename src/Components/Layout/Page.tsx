import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import * as styles from "./Page.module.scss";

export type PageProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <main className={styles.demo}>
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default Page;
