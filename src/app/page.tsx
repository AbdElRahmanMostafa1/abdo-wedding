"use client";
import { Navbar } from "@/components";
import Countdown from "@/components/countdown";
import { HappyCoupleSection, HomeSection, OurPhotos } from "@/sections";
import { Box, Stack } from "@mui/material";

export default function Home() {
  if (process.env.NODE_ENV === "production") {
    window.console = {
      ...window.console, log: ()=>{}, info: ()=>{}, error: ()=>{}, warn: ()=>{}
    }
  } 
  

  return (
    <>
      {/* <Navbar /> */}
      <HomeSection />
      <Countdown />
      <Box
        sx={{
          width: { xs: "95%", sm: "95%", md: "80%" },
        }}
        component={"main"}
        margin={"auto"}
      >
        <HappyCoupleSection />
      </Box>

      <OurPhotos />
    </>
  );
}
