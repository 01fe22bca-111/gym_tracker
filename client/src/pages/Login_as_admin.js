import React from "react";
import Layout from "../components/Layout";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login_as_admin = () => {
  return (
    <Layout>
      <div className="wrapper">
        <form action="">
          <h1>Login </h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Dont have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>

        <h1>Welcome to login page of admin</h1>
      </div>
    </Layout>
  );
};

export default Login_as_admin;
