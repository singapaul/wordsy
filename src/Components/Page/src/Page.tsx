import React from "react";
// import * as styles from "./Page.module.scss";

export type PageProps = {
  children: React.ReactNode;
  title: React.ReactNode;
};

const Page = ({ children, title }: PageProps) => {
  return (
    <main>
      <h1>{title}</h1>
      <div>{children}</div>
    </main>
  );
};

export default Page;
