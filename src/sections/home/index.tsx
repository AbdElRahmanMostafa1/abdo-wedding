"use client";
import { playfairDisplay } from "@/fonts";
import "./home.css";

import { CountdownItem, Navbar } from "@/components";
import useCountdownDate from "@/hooks/useCountdownDate";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Countdown from "@/components/countdown";

const HomeSection = () => {
  return (
    <Box className="home-container">
      <Navbar />

      <Stack
        color={"white"}
        justifyContent={"center"}
        sx={{
          border: "7.5px solid white",
          //   padding: "20px 100px",
          margin: "auto",
          textAlign: "center",
          //   marginTop: "20px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "15%",
          width: "75%",
          height: "38%",
        }}
      >
        <Typography
          component={"h1"}
          variant="h1"
          sx={{
            fontSize: { xs: "32px", md: "48px", lg: "62px" },
          }}
        >
          AbdElRahman & Alaa
        </Typography>
        <Box
          sx={{
            margin: "30px",
          }}
        >
          <Typography variant="h5">Are Getting Married</Typography>
          <Typography variant="h5">April 25, 2024</Typography>
        </Box>
      </Stack>

      {/* <Countdown /> */}
    </Box>
  );
};

export default HomeSection;
