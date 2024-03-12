import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/warmup.css";


const Day1 = () => {
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
        <Typography variant="h4">Welcome to day1 let's begin</Typography>
        <box>
       
        </box>
        <p>
        sets 5 reps 10 tempo 2010 rest 60sec lie on a flat bench
         holding a barbellwith your hands slightly wider than
          shoulder-width apart. brace your core then lower
           the bar towards your chest.press it back up to the start
        </p>
        <br />
        <box>
        </box>
        <p>
        reps 12-15 tempo 2010 rest 60 sec lie on an incline bench holding a dumbbell in each hand by your shoulder .press the weight
         up until your arms are straight them lower them back to the start under control
        </p>
      </Box>
      <div className="button">
      <NavLink to ="/Day2">
      <button>END SESSION </button>
      </NavLink>
      </div>
    </Layout>
  );
};

export default Day1;