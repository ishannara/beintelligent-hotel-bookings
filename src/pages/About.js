import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";

export default function About() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={5}
        flexWrap="wrap"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          width: "85%",
          mx: "auto",
          p: { xs: 2, md: 6 },
          mb: 10,
        }}
      >
        <Box flex={1} maxWidth={800}>
          <Typography
            variant="h4"
            fontFamily="sans-serif"
            fontWeight={700}
            gutterBottom
          >
            About Hotely
          </Typography>

          <Typography
            mt={3}
            variant="body1"
            sx={{
              fontWeight: 300,
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            Founded in 2009, Hotely has been setting the standard for luxury
            hospitality. Our commitment to exceptional service and attention to
            detail has made us a preferred destination for discerning travelers
            worldwide.
          </Typography>

          <Typography
            mt={3}
            variant="body1"
            sx={{
              fontWeight: 300,
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            Located on the pristine beaches of Paradise Island, we offer an
            unparalleled experience that combines modern luxury with traditional
            hospitality. Every guest is treated as family, ensuring memories
            that last a lifetime.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              background: "#ff4081",
              color: "#fff",
              mt: 5,
              fontWeight: 600,
              borderRadius: 3,
              "&:hover": { background: "#e73370" },
            }}
          >
            Learn More
          </Button>
        </Box>

        <Box flex={1} display="flex" justifyContent="center">
          <img
            src="https://media.architecturaldigest.com/photos/6076e0de751fb0468bd1b1a6/16:9/w_1280,c_limit/Fairmont%20Scottsdale%20Princess%20-%20Princess%20Pool%20-%201418711.jpg"
            alt="pool"
            style={{
              width: "100%",
              maxWidth: "800px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
          />
        </Box>
      </Box>

      {/* Icons */}
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gap={6}
        flexWrap="wrap"
        mb={5}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <PersonIcon sx={{ fontSize: 40, color: "#ff4081", mb: 2 }} />
          <Typography variant="h5" fontWeight={600}>
            15+
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Years Experience
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <PeopleAltIcon sx={{ fontSize: 35, color: "#ff4081", mb: 2 }} />
          <Typography variant="h5" fontWeight={600}>
            10K+
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Happy Guests
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <StarBorderIcon sx={{ fontSize: 35, color: "#ff4081", mb: 2 }} />
          <Typography variant="h5" fontWeight={600}>
            4.8
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating (2000+ Reviews)
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <AccessTimeIcon sx={{ fontSize: 35, color: "#ff4081", mb: 3 }} />
          <Typography variant="h5" fontWeight={600}>
            24/7
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Service
          </Typography>
        </Box>
      </Box>
      {/* <Container maxWidth="lg">
        <PeopleAltIcon />
        <Typography variant="h4" component="span" mx={1}>
          10k+ <span style={{ fontWeight: 300 }}>Happy Guests</span>
        </Typography>
        <StarBorderIcon />
        <Typography variant="body2">4.8 Rating (2000+ Reviews)</Typography>
        <AccessTimeIcon />
        <Typography variant="body2">24/7 Service</Typography>
      </Container> */}
    </>
  );
}
