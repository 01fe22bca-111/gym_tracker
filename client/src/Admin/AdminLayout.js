import React from "react";
import AdminFooter from "./AdminFooter";
import Admin_Header from "./Admin_Header";

const AdminLayout = (props) => {
  console.log("here", props);
  return (
    <>
      <Admin_Header />
      <div>{props.children}</div>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
