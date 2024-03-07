import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import user_icon from "../Images/Assets/person.png";
import email_icon from "../Images/Assets/email.png";
import password_icon from "../Images/Assets/password.png";
import "../pages/signup.css";
import login from "../pages/login-page1.jpg";
const Admin = () => {
  const [action, setAction] = useState("Add Admin");
  const [user, setUser] = useState({
    name: "",
    email: "",
    status: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <AdminLayout>
      <div className="container" style={{ backgroundImage: `url(${login})` }}>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
                placeholder="Username"
              />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
              placeholder="Email Id"
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="text"
              name="status"
              id="status"
              autoComplete="off"
              value={user.status}
              onChange={handleInputs}
              placeholder="Status"
            />
          </div>
        </div>

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Add Admin");
            }}
          >
            Add Admin
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admin;
