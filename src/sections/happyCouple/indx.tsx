import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HappyCouple = () => {
  return (
    <>
      <Box id="happy-couple" component={"section"}>
        <Typography variant="h4" textAlign={"center"} marginBottom={"50px"}>
          Happy Couple
        </Typography>

        <Box mb="60px">
          <Stack flexDirection={"row"} justifyContent={"center"}>
            <Box
              sx={{
                display: { sm: "none", md: "block" },
              }}
              mr={{ sm: "0", md: "15px" }}
              flex={"0.25"}
            >
              <Image
                src="https://jd.exsythemes.com/img/happy-couple/groom.jpg"
                alt="Groom"
                width={`${100}`}
                height={100}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>

            <Box
              flex={{
                sm: 1,
                md: "0.75",
              }}
            >
              <Typography variant="h5" textAlign={"center"} fontWeight={"900"}>
                AbdElRahman
              </Typography>
              <Typography textAlign={"center"}>The Groom</Typography>
              <Typography mb="10px">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium eum similique temporibus dolorum quae. Assumenda quasi tempore tenetur dolores sequi atque ea earum ad, quas odit, quo, dolorem fuga! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium eum similique temporibus dolorum quae. Assumenda quasi tempore tenetur dolores sequi atque ea earum ad, quas odit, quo, dolorem fuga!
              </Typography>
              <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium eum similique temporibus dolorum quae. Assumenda quasi tempore tenetur dolores sequi atque ea earum ad, quas odit, quo, dolorem fuga!
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Stack flexDirection={"row"} justifyContent={"center"}>
            <Box
              flex={{
                sm: 1,
                md: "0.75",
              }}
            >
              <Typography variant="h5" textAlign={"center"} fontWeight={"900"}>
                Aalaa
              </Typography>
              <Box>
                <Typography textAlign={"center"}>The Bride</Typography>
              </Box>
              <Typography mb="10px">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium eum similique temporibus dolorum quae. Assumenda quasi tempore tenetur dolores sequi atque ea earum ad, quas odit, quo, dolorem fuga!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium eum similique temporibus dolorum quae. Assumenda quasi tempore tenetur dolores sequi atque ea earum ad, quas odit, quo, dolorem fuga!
              </Typography>
              <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium eum similique temporibus dolorum quae. Assumenda quasi tempore tenetur dolores sequi atque ea earum ad, quas odit, quo, dolorem fuga!
              </Typography>
            </Box>

            <Box
              sx={{
                display: { sm: "none", md: "block", xs: "none" },
              }}
              ml="15px"
              flex={"0.25"}
            >
              <Image
                src="https://jd.exsythemes.com/img/happy-couple/bride.jpg"
                alt="Groom"
                width={`${100}`}
                height={100}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default HappyCouple;
