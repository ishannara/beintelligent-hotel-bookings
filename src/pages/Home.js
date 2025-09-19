import React from "react";
import ImageSlider from "../ImageSlider";
import { Box, Divider, Typography } from "@mui/material";
import About from "./About";
import Rooms from "./Rooms";
import Services from "./Services";
import { Gallery } from "./Gallery";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      {/* Component */}
      <ImageSlider />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        my={6}
      >
        <Typography variant="h3" fontFamily="serif">
          WELCOME TO HOTEL
        </Typography>

        <Divider
          sx={{
            bgcolor: "white",
            width: "20%",
            my: 2,
          }}
        />

        <Typography
          sx={{
            fontWeight: 300,
            color: "text.secondary",
            maxWidth: 900,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type electronic.
        </Typography>
      </Box>

      {/* Sections */}
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
