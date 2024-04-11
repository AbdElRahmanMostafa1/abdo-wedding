import { playfairDisplay } from "@/fonts";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

interface CountdownItemProps {
  number: number;
  unit: string;
}

const CountdownItem = (props: CountdownItemProps) => {
  return (
    <Box
      sx={{
        border: "1px solid #D0C0DF",
        padding: "7.5px 15px",
        textAlign: "center",
        fontFamily: playfairDisplay.style.fontFamily,
      }}
    >
      <Typography fontWeight={"900"}>{props.number}</Typography>
      <Typography>{props.unit}</Typography>
    </Box>
  );
};

export default CountdownItem;
