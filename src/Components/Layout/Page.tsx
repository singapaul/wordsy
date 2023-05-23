import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import * as styles from "./Page.module.scss";

export type PageProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
  className?: any;
};

const Page = ({ children, className }: PageProps) => {
  return (
    <main className={styles.page}>
      <Header />
      <body className={className}>{children}</body>
      <Footer />
    </main>
  );
};

export default Page;
