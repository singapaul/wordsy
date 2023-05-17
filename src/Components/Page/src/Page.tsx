import React from "react";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";

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
