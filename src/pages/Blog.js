import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import electrical from "../assets/electrical.jpg";
import amirbedroom from "../assets/amirbedroom.jpg";
import tvtablechair from "../assets/tv_table_chair.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

export default function Blog() {
  const images = [
    {
      subTitle: "activities",
      img: electrical,
      title: "Top 10 Activities in Paradise Island",
      dec: "Discover the most exciting adventures and relaxing activities our tropical paradise has to offer.",
      name: "Sarah Johnson",
    },
    {
      subTitle: "food",
      img: amirbedroom,
      title: "A Luxurious Stay at Amir's Bedroom",
      dec: "Experience the ultimate comfort and elegance in our beautifully designed Amir's Bedroom.",
      name: "Chef Marco Rodriguez",
    },
    {
      subTitle: "luxury",
      img: tvtablechair,
      title: "A Luxurious Stay at TV Table Chair",
      dec: "Experience the ultimate comfort and elegance in our beautifully designed TV Table Chair.",
      name: "David Chen",
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
        gap={3}
      >
        <Typography variant="h4" fontFamily="serif" fontWeight={600}>
          Latest News & Stories
        </Typography>
        <Typography variant="body1" fontSize={"17px"} color="text.secondary">
          Stories, tips, and insights from paradise
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
        mb={6}
      >
        {images.map((image, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 450,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-5px)",
              },
            }}
          >
            <Box
              sx={{
                height: 180,
                overflow: "hidden",
              }}
            >
              <img
                src={image.img}
                alt={image.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>

            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" mb={1} gap={1}>
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  sx={{ color: "#ff4081" }}
                  p={0.3}
                >
                  {image.subTitle}
                </Typography>
                <CalendarTodayIcon
                  sx={{ fontSize: 14, color: "text.secondary" }}
                />
                <Typography variant="caption" color="text.secondary">
                  Sep 4, 2025
                </Typography>
              </Box>

              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{
                  color: "black",
                  transition: "color 0.2s ease",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#ff4081",
                    textDecoration: "underline",
                  },
                }}
              >
                {image.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 15, lineHeight: 1.6 }}
                mb={3}
              >
                {image.dec}
              </Typography>

              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 15 }}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <PersonIcon
                      sx={{ fontSize: 15, color: "text.secondary" }}
                    />
                    {image.name}
                  </Box>
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#ff4081",
                  }}
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => alert("Booking feature coming soon!")}
                >
                  Book Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
