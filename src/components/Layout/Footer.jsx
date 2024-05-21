import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#072541", color: "white", p: 3 }}
      >
        <Box sx={{my:3, "& svg":{
            fontSize:"40px",
            cursor:"pointer",
            mr:2,
        },
        "& svg:hover":{
            color:'#03AED2',
            transform:'translateX(5px)',
            transition:'all 400ms'
        }
        }}>
            {/*icons*/}
            <InstagramIcon/>
            <XIcon/>
            <FacebookIcon/>
            <WhatsAppIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Prashant Iratkar
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
