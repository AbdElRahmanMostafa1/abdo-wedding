"use client";
import { Footer, Navbar, WeddingLocation } from "@/components";
import Countdown from "@/components/countdown";
import { HappyCoupleSection, HomeSection, OurPhotos } from "@/sections";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      window.console = {
        ...window.console,
        log: () => {},
        info: () => {},
        error: () => {},
        warn: () => {},
      };
    }
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      {/* <HomeSection />
      <Countdown /> */}
      <Box
        sx={{
          width: { xs: "95%", sm: "95%", md: "80%" },
        }}
        component={"main"}
        margin={"auto"}
      >
        <HappyCoupleSection />
      </Box>

      {/* <OurPhotos /> */}
      <Box
        component={"section"}
        sx={{
          width: { xs: "95%", sm: "95%", md: "80%" },
          margin: 'auto'
        }}>
        <Typography variant="h4" textAlign={"center"} marginBottom={"20px"}>
          WEDDING CEREMONY
        </Typography>
        <section>
          <Box sx={{
            border: "5px solid black",
            padding: "15px",
            
          }}>
            
          </Box>

          <Box>
            <WeddingLocation />
          </Box>
        </section>
      </Box>

<div style={{
  marginTop: "100px"
}}>
      <Footer />
      </div>
    </>
  );
}
