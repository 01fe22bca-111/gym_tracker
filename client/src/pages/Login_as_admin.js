import React from "react";
import Layout from "../components/Layout";
import AdminLayout from "../Admin/AdminLayout";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "../pages/Admin.css";
import login from "../pages/login-page1.jpg";
import { Link } from "react-router-dom";
import "../Admin/Admin.js";
const Login_as_admin = () => {
  return (
    <AdminLayout>
      <Layout>
        <div className="wrapper" style={{ backgroundImage: `url(${login})` }}>
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

            <Link to="/Admin">
              <button type="submit">Login</button>
            </Link>
            <div className="register-link">
              <p>
                Dont have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </Layout>
    </AdminLayout>
  );
};

export default Login_as_admin;
