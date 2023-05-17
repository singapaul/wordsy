import React from "react";
import DarkModeToggle from "../../DarkModeToggle";
// import * as styles from "./Page.module.scss";

export type PageProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <main>
      <DarkModeToggle />
      <div>{children}</div>
    </main>
  );
};

export default Page;
