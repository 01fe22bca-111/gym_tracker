import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/warmup.css";

const Day2 = () => {
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
        <Typography variant="h4">Welcome to Day2</Typography>
        <box>
          
          </box>
        
        <p>
          stand tall ,holding a bar across the back of your shoulders.keeping your 
          chest up and core braced squat down as deep as you can.
           drive back up through  your heels to return to the first
        </p>
        <br />
        <box>
        
       </box>
        <p>
       reps 12-15 tempo 2011 rest 60 sec sit with your upper back support on a bench 
       holding a barbell across the tops of your thighs thrust your hips up,
       squeeze your glutes at the top ,and them return to the start
        </p>
        <box>
        
        </box>
        <p>
          reps 12-15 tempo 2110 rest 60sec lie on an incline bench ,holding a dumbbell in each
          hand by your shoulder. press the weights up until your arms are straight.
          then lower them back to the start under control.
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

export default Day2;