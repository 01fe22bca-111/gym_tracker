import React, { useState } from "react";
import Layout from "../components/Layout";
import user_icon from "../Images/Assets/person.png";
import email_icon from "../Images/Assets/email.png";
import password_icon from "../Images/Assets/password.png";
import "../pages/signup.css";
const Login_as_customer = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <Layout>
      <div className="container">
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
              <input type="text" placeholder="Username" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click Here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login_as_customer;
