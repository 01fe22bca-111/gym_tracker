import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  console.log("here", props);
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
