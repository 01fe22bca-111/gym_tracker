import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = (props ) => {
  console.log("here",props);
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;