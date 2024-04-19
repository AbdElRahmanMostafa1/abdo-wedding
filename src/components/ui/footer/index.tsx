import { Box, Typography } from "@mui/material";
import Image from "next/image";
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
                    <Image src="https://scontent.fcai2-1.fna.fbcdn.net/v/t39.30808-6/430095826_381468331501081_4030675636284555614_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MYBf5qP58OAAb5i_7QS&_nc_ht=scontent.fcai2-1.fna&cb_e2o_trans=q&oh=00_AfDcGl1tOhGkSdnyArlvrnGCqc_B-u0qhNiNXGaLhETE7Q&oe=66281192" alt="Footer Image" width={192} height={112} style={{maxWidth: 192, maxHeight: 112,
                    objectFit: "contain"}}  />
                    <Typography textAlign={"center"}>25/04/2024</Typography>
                </Box>
                <Typography
                    component={"h3"}
                    variant="h3"
                    sx={{
                        display: { xs: "none", sm: "block" },
                    }}
                >
                    Aalaa
                </Typography>{" "}
            </Box>
        </Box>
    );
};

export default Footer;
