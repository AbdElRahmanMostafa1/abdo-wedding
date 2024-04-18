"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import { ListItemButton, ListItemText } from "@mui/material";

const navLinks = [
  {
    label: "Home",
    link: "home",
  },
  {
    label: "Happy Couple",
    link: "happy-couple",
  },
  {
    label: "Wedding Cermony",
    link: "wedding-cermony",
  },
];

const ResponsiveAppBar = () => {
  const [mobileNavLinks, setMobileNavLinks] = useState(false);

  const toggleMobileNavLinks = () =>
    setMobileNavLinks((prevValue) => !prevValue);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        component={"nav"}
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              flexGrow={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                {/* <Image
                  src="https://jd.exsythemes.com/img/header/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                /> */}
              </Box>
              <Box
                component="ul"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  fontSize: { xs: "12px", sm: "default" },
                }}
                flexDirection={"row"}
                alignItems={"center"}
              >
                {navLinks.map((navLink) => (
                  <ListItemButton
                    component="a"
                    key={navLink.link}
                    href={`#${navLink.link}`}
                    sx={{
                      padding: { sm: "0 15px", md: "0 20px" },
                      margin: { sm: "0 7.5px", md: "0 15px" },
                      fontSize: { xs: "12px", sm: "default" },
                    }}
                  >
                    <Typography>{navLink.label}</Typography>
                  </ListItemButton>
                ))}
              </Box>
              <Box>
                {/* <Button
                  onClick={toggleMobileNavLinks}
                  sx={{
                    display: { xs: "block", sm: "none" },
                  }}
                >
                  <Typography>MENU</Typography>
                </Button> */}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {mobileNavLinks && (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            background: "#4F3566",
          }}
        ></Box>
      )}
    </>
  );
};
export default ResponsiveAppBar;
