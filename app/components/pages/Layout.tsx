// components/Layout.js
import React from "react";
import Navigation from "./Navigation"; // Adjust the path as necessary
import FooterPage from "./FooterPage"; // Adjust the path as necessary

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <FooterPage />
    </>
  );
};

export default Layout;
