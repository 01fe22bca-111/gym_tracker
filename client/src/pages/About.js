import React from "react";
import Layout from "./../components/Layout";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Header />
      <Layout>
        <Box
          sx={{
            my: 10,
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
            "@media(max-width:600px)": {
              mt: 0,
              "& h4": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h4">Welcome to the Gym</Typography>
          <p>
            Welcome to [Your Gym's Name]! At [Your Gym's Name], we're more than
            just a fitness center; we're a community dedicated to helping you
            achieve your health and wellness goals. Whether you're a seasoned
            athlete or just starting your fitness journey, we're here to support
            you every step of the way. Our Mission Our mission is simple: to
            empower individuals to lead healthier, happier lives through fitness
            and community. We believe that exercise is not just about physical
            strength, but also about mental well-being, self-confidence, and
            personal growth. State-of-the-Art Facilities Equipped with
            state-of-the-art facilities and top-notch equipment, [Your Gym's
            Name] offers a diverse range of workout options to suit every
            fitness level and preference. From cardio machines and free weights
            to group fitness classes and personal training sessions, we have
            everything you need to reach your fitness goals.
          </p>
          <br />
          <p>
            Community Spirit At [Your Gym's Name], we believe that fitness is
            more fun and effective when shared with others. That's why we foster
            a supportive and inclusive community where members can connect,
            inspire, and motivate each other. From group workouts and social
            events to online forums and challenges, there are plenty of
            opportunities to engage with like-minded individuals and make
            lasting friendships.
          </p>
        </Box>
      </Layout>
    </>
  );
};

export default About;
