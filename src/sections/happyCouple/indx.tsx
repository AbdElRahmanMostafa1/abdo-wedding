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
                I bumped into Diana again 7 years later in a club, she had
                literally just returned from a holiday and was out celebrating
                her birthday. I was back from sea for 4 days before I left again
                for a few months. The probability that this would happen is
                crazy and to top it all off, she remembered my name.
              </Typography>
              <Typography>
                I got this amazing feeling as soon as I saw her and it lives
                with me every day and I promise that the bunny outfit had
                nothing to do with it. Needless to say it turned into a very
                expensive night out
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
                I bumped into Diana again 7 years later in a club, she had
                literally just returned from a holiday and was out celebrating
                her birthday. I was back from sea for 4 days before I left again
                for a few months. The probability that this would happen is
                crazy and to top it all off, she remembered my name.
              </Typography>
              <Typography>
                I got this amazing feeling as soon as I saw her and it lives
                with me every day and I promise that the bunny outfit had
                nothing to do with it. Needless to say it turned into a very
                expensive night out
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
