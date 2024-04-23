import React from 'react'
import Layout from '../components/Layout/Layout';
import { NavLink } from 'react-router-dom';

export const Logout = () => {
  return (
    <Layout>
      <NavLink to="/Warmup">
      <h1>Logout
            </h1>
      </NavLink>
        
        </Layout>
  );
};
export default Logout;