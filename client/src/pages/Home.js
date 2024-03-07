import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import "../styles/Homestyles.css";
import banner from "../Images/home.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
          <h1>GYM TRACKER</h1>
          <p>LETS WORK OUT</p>
          <NavLink to="/Login_as_admin">
            <button>LETS START</button>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
