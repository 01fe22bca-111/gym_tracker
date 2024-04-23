import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/warmup.css";

const Restday = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">It's your Rest Day
                             GRAB A CUP OF COFFEE AND LET YOUR MUSCLES REST TODAY!</Typography>
        <box>
       
        </box>
        <p>
        Rest days are an important but often overlooked aspect of regular exercise,
         and when you optimise the ratio of work to rest, you’ll reach
          your fitness goals faster, feel great and avoid workout burnout.
        </p>
      </Box>
      <div className="button">
      <NavLink to ="/Schedule">
      <button>END SESSION </button>
      </NavLink>
      </div>
    </Layout>
  );
};

export default Restday;