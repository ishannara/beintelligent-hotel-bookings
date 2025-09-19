import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import hero_1 from "../assets/hero-1.png";
import outside3 from "../assets/outside3.jpg";
import poolside from "../assets/poolside.jpg";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";

function Rooms() {
  const rooms = [
    {
      img: hero_1,
      title: "Luxury Bed Room 1",
      desc: "Spacious suite with panoramic ocean views, private balcony, and luxury amenities.",
      guests: "Up to 4 Guests",
      icon: <PeopleAltIcon sx={{ fontSize: "25px" }} />,
      icon1: <WifiIcon sx={{ fontSize: "17px" }} />,
      label: "$450/night",
    },
    {
      img: outside3,
      title: "Luxury Bed Room 2",
      desc: "Elegant room overlooking tropical gardens with modern furnishings and peaceful ambiance.",
      guests: "Up to 2 Guests",
      icon: <PeopleAltIcon sx={{ fontSize: "25px" }} />,
      icon1: <WifiIcon sx={{ fontSize: "17px" }} />,
      label2: "$280/night",
    },
    {
      img: poolside,
      title: "Luxury Bed Room 3",
      desc: "Exclusive overwater villa with direct lagoon access, glass floor panels, and ultimate privacy.",
      guests: "Up to 6 Guests",
      icon: <PeopleAltIcon sx={{ fontSize: "25px" }} />,
      icon1: <WifiIcon sx={{ fontSize: "17px" }} />,
      labe3: "$800/night",
    },
  ];
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="center"
        my={10}
        alignItems={"center"}
        flexDirection="column"
        gap={4}
      >
        <Typography variant="h4" fontFamily="serif" fontWeight={600}>
          Ours Rooms
        </Typography>
        <Typography variant="body1" fontSize={"17px"} color="text.secondary">
          Luxury accommodations for every taste
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
        mb={5}
      >
        {rooms.map((room, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 460,
              // width: "100%",
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.3s ease",
              "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
            }}
          >
            <CardContent>
              <img src={room.img} alt={room.title} className="img1" />
              <Typography variant="h6" mt={2} fontWeight={600}>
                {room.title}
                <Chip
                  label={room.label || room.label2 || room.labe3}
                  clickable
                  size="small"
                  sx={{
                    background: "#ff4081",
                    color: "#fff",
                    textAlign: "right",
                    float: "right",
                  }}
                />
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                mt={1}
                sx={{ fontSize: 15 }}
              >
                {room.desc}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                mt={1}
                sx={{
                  fontSize: 15,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 4,
                }}
              >
                {room.icon}
                {room.guests}
              </Typography>
              <Typography variant="body2" mt={2}>
                Amenities:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {room.icon1}
                Free Wifi
                <BathtubIcon sx={{ fontSize: "17px" }} /> Private Bathroom
                <LiveTvIcon sx={{ fontSize: "17px" }} /> TV
                <CoffeeMakerIcon sx={{ fontSize: "17px" }} /> Coffee Maker
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#ff4081",
                  color: "#fff",
                  mt: 3,
                  width: "100%",
                  fontFamily: "sans-serif",
                }}
                onClick={() => alert("Booking feature coming soon!")}
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Rooms;
