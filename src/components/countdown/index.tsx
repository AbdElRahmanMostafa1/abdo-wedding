import { playfairDisplay } from "@/fonts";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { CountdownItem } from "..";
import useCountdownDate from "@/hooks/useCountdownDate";

const Countdown = () => {
  const [days, hours, minutes, seconds] = useCountdownDate(
    new Date("2024-04-25T16:00:00.00Z")
  );

  return (
    <Box className="countdown-wrapper" sx={{
    }}>
      <Typography
        variant="h5"
        component={"h5"}
        sx={{
          fontFamily: playfairDisplay.style.fontFamily,
          margin: "0 0 30px 0",
          color: "#4F3566",
          fontSize: { xs: "20px", md: "24px", lg: "32px" },
          textAlign: "center",
        }}
      >
        Countdown to Wedding Ceremony
      </Typography>
      <Stack flexDirection={"row"} justifyContent={"center"} flexWrap={"wrap"}>
        <CountdownItem number={days} unit="Days" />
        <CountdownItem number={hours} unit="hours" />
        <CountdownItem number={minutes} unit="minutes" />
        <CountdownItem number={seconds} unit="seconds" />
      </Stack>
    </Box>
  );
};

export default Countdown;
