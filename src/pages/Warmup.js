import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography,Card, CardActionArea, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/warmup.css";
import Neck from  "C:/Users/USER/gym_tracker/src/images/Neck_circle.jpeg";

const Warmup = () => {
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
        <card sx ={{ maxwidth: "390px",display:"flex",m: 2}}>
          <CardActionArea>
            <CardMedia
            sx={{ minHeight:"400px"}}
            component={"img"}
            src={Warmup.image}
            alt={Warmup.name}
            />
          </CardActionArea>
        </card>
        <Typography variant="h4">Its time to Warmup your body</Typography>
        <box>
        
        </box>
        <p>
           standup and straight your poster and start 
           rotating your neck in clockwise or Anticlockwise direction
        </p>
        <br />
        <box>
        </box>
        <p>
          keep your Standing position
           and this time rotate your shoulder in clockwise direction
        </p> 
        <box>
        
        </box>
        <p>
          keep your Standing position and rotate your arms in clockwise direction
        </p>
      </Box>
      <div className="button">
      <NavLink to ="/Day1">
      <button>END SESSION </button>
      </NavLink>
      </div>
      
     
  
    </Layout>
  );
};

export default Warmup;