import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Box
            component={"footer"}
            style={{
                backgroundColor: "#FAF0FF",
                height: "128px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: "-50%",
                }}
            >
                <Typography
                    component={"h3"}
                    variant="h3"
                    sx={{
                        display: { xs: "none", sm: "block" },
                    }}
                >
                    Abdo
                </Typography>
                <Box
                    sx={{
                        margin: "0px 15px",
                    }}
                >
                    <img src="https://jd.exsythemes.com/img/footer/photo.jpg" />
                    <Typography textAlign={"center"}>25/04/2024</Typography>
                </Box>
                <Typography
                    component={"h3"}
                    variant="h3"
                    sx={{
                        display: { xs: "none", sm: "block" },
                    }}
                >
                    Alaa
                </Typography>{" "}
            </Box>
        </Box>
    );
};

export default Footer;
