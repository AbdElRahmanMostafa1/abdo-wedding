"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { Footer, WeddingLocation } from "@/components";
import Countdown from "@/components/countdown";
import { HappyCoupleSection, HomeSection, OurPhotos } from "@/sections";

export default function Home() {  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
  }, []);

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
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <>
      {/* <Navbar /> */}
      <HomeSection />
      <Box sx={{
        padding: "30px 0"
      }}>
        <Countdown />
      </Box>

      
      <Box id="happy-couple" sx={{
        padding: "30px 0"
      }}>
        <Box
          sx={{
            width: { xs: "95%", sm: "95%", md: "80%" },
          }}
          component={"main"}
          margin={"auto"}
        >
          <HappyCoupleSection />
        </Box>
      </Box>

      <Box
        id="wedding-cermony"
        component={"section"}
        sx={{
          width: { xs: "95%", sm: "95%", md: "80%" },
          margin: "auto",
          padding: "30px 0",
          height:"81vh"
        }}
      >
        <Typography variant="h4" textAlign={"center"} marginBottom={"20px"}>
          WEDDING CEREMONY
        </Typography>
        <Box
          component={"section"}
          sx={{
            position: "relative",
            display: {
              lg: "flex",
              xs: "block",
            },
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            justifyContent: "flex-end",
            alignItems: {
              lg: "self-start",
              xs: "center",
            },
            // height: "81vh",
            marginRight: {
              xs: "0",
              lg: "25%",
            },
          }}
        >
          <Box
            sx={{
              border: "5px solid black",
              padding: {
                md: "15px",
                xs: "15px",
                lg: "2% 2% 6% 21%",
              },
              width: {
                lg: "50%",
                md: "75%",
                sm: "95%",
              },
              margin: {
                xs: "auto",
                lg: 0
              }
            }}
          >
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "start",
                },
              }}
              component={"h4"}
              variant="h4"
            >
              Welcome
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Typography marginRight={4}>WHEN</Typography>
              <Typography>06:00, April 25th, 2024</Typography>
            </Box>
            <Box
              sx={{
                marginTop: {
                  lg: 8,
                  xs: 2,
                },
              }}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Typography marginRight={4}>WHERE</Typography>
              <Typography>
                كازينو المعمورة - قاعة السرايات - أمام كلية الطب القصر العيني
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              position: {
                xs: "initial",
                lg: "absolute",
              },
              left: "20%",
              top: "10%",
              width: {
                lg: "50%",
                md: "75%",
                sm: "95%",
              },
              margin: {
                xs: "15px auto",
                lg: 0
              }
            }}
          >
            <WeddingLocation />
          </Box>
        </Box>
      </Box>

      <div
        style={{
          marginTop: "100px",
        }}
      >
        <Footer />
      </div>
    </>
  );
}
