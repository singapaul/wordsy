import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import * as styles from "./Page.module.scss";

export type PageProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
  className?: any;
};

const LayoutComp = ({ children, className }: any) => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutComp;
