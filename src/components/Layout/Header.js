import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../Layout/HeaderStyle.css";
import homepage from "../Layout/homepage.jpg";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={homepage} alt="logo" height={"70"} width="200" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Warmup"}>Warmup</NavLink>
        </li>
        <li>
          <NavLink to={"/Day1"}>Day1</NavLink>
        </li>
        <li>
          <NavLink to={"/Day2"}>Day2</NavLink>
        </li>
        <li>
          <NavLink to={"/Schedule"}>Schedule</NavLink>
        </li>
        <li>
          <NavLink to={"/Payment"}>Payment</NavLink>
        </li>
        <li>
          <NavLink to={"/Restday"}>Restday</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1,my:2 }}
            >
            <FitnessCenterIcon/>
            Gym Tracker
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Warmup"}>Warmup</NavLink>
                </li>
                <li>
                  <NavLink to={"/Day1"}>Day1</NavLink>
                </li>
                <li>
                  <NavLink to={"/Day2"}>Day2</NavLink>
                </li>
                <li>
                  <NavLink to={"/Schedule"}>Schedule</NavLink>
                </li>
                <li>
                  <NavLink to={"/Payment"}>Payment</NavLink>
                </li>
                <li>
                  <NavLink to={"/Restday"}>Restday</NavLink>
                </li>
                <li>
                  <NavLink to={"/Logout"}>Logout</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
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

export default Header;
