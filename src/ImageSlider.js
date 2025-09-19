import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import image1 from "./assets/outside4.png";
import image2 from "./assets/5.jpg";
import image3 from "./assets/6.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ImageSlider = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={images[currentIndex]}
          alt="slider"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            width: "100%",
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              fontSize: { xs: "2.2rem", md: "5rem" },
              fontWeight: 600,
            }}
          >
            Welcome to Hotely
          </Typography>

          <Divider
            sx={{
              bgcolor: "white",
              width: { xs: "40%", md: "20%" },
              mx: "auto",
              my: 2,
            }}
          />

          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            THE PLACE WHERE YOU LOOKING TO
          </Typography>

          <Button
            variant="outlined"
            sx={{
              mt: 3,
              // px: 4,
              py: 1,
              color: "white",
              borderColor: "white",
              fontWeight: 600,
              ":hover": {
                backgroundColor: "#fff",
                color: "black",
              },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Explore Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ImageSlider;
