import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../../src/Admin/AdminHeaderstyle.css";
const Admin_Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"peachpuff"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <FitnessCenterIcon />
        Gym Tracker
      </Typography>
      <Divider />

      <ul className="mobile-navigation1">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Admin"}>Add Admin</Link>
        </li>
        <li>
          <Link to={"/AdminList"}>Admin List</Link>
        </li>
        <li>
          <Link to={"/Customer"}>Add Customer</Link>
        </li>
        <li>
          <Link to={"/CustomerList"}>Customer List</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <h1>{props.children}</h1>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"peachpuff"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FitnessCenterIcon />
              Gym Tracker
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu1">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/Admin"}>Add Admin</Link>
                </li>
                <li>
                  <Link to={"/AdminList"}>Admin List</Link>
                </li>
                <li>
                  <Link to={"/Customer"}>Add Customer</Link>
                </li>
                <li>
                  <Link to={"/CustomerList"}>Customer List</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "200px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Admin_Header;
