import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AirportShuttleRoundedIcon from "@mui/icons-material/AirportShuttleRounded";
import LocalAirportRoundedIcon from "@mui/icons-material/LocalAirportRounded";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import WaterIcon from "@mui/icons-material/Water";

function Services() {
  const rooms = [
    {
      icon: <RestaurantIcon fontSize="large" />,
      title: "Fine Dining",
      desc: "Experience world-class cuisine at our award-winning restaurants with ocean views.",
      text: [
        "International Cuisine",
        "Fresh Seafood",
        "Wine Cellar",
        "Private Dining",
      ],
    },
    {
      icon: <WaterIcon fontSize="large" />,
      title: "Spa & Wellness",
      desc: "Relax and rejuvenate with our luxurious spa treatments and wellness programs.",
      text: [
        "Massage Therapy",
        "Yoga Classes",
        "Steam Room",
        "Beauty Treatments",
      ],
    },
    {
      icon: <AirportShuttleRoundedIcon fontSize="large" />,
      title: "Transportation",
      desc: "Convenient airport transfers and local transportation services for our guests.",
      text: [
        "Airport Pickup",
        "Car Rental",
        "Island Tours",
        "Private Chauffeur",
      ],
    },
    {
      icon: <LocalAirportRoundedIcon fontSize="large" />,
      title: "Concierge Services",
      desc: "Our dedicated team assists with reservations, tours, and special requests.",
      text: [
        "Trip Planning",
        "Restaurant Bookings",
        "Event Planning",
        "Excursions",
      ],
    },
    {
      icon: <FitnessCenterRoundedIcon fontSize="large" />,
      title: "Fitness Center",
      desc: "State-of-the-art fitness facilities with personal training services.",
      text: [
        "Modern Equipment",
        "Personal Trainer",
        "Group Classes",
        "Outdoor Activities",
      ],
    },
    {
      icon: <WifiRoundedIcon fontSize="large" />,
      title: "Business Center",
      desc: "Full-service business center with meeting rooms and high-speed internet.",
      text: [
        "Meeting Rooms",
        "High-Speed WiFi",
        "Printing Services",
        "Video Conferencing",
      ],
    },
  ];

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        my={10}
        alignItems="center"
        flexDirection="column"
        gap={2}
        textAlign="center"
      >
        <Typography variant="h4" fontFamily="serif" fontWeight={600}>
          Our Services
        </Typography>
        <Typography variant="body1" fontSize="17px" color="text.secondary">
          Exceptional amenities for an unforgettable stay
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
        mb={5}
      >
        {rooms.map((room, ind) => (
          <Card
            key={ind}
            sx={{
              maxWidth: 400,
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.2s ease",
              "&:hover": { boxShadow: 6, transform: "scale(1.03)" },
            }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="#ff4081"
                sx={{ mb: 3, fontSize: 50 }}
              >
                {room.icon}
              </Box>

              <Typography
                variant="h6"
                fontWeight={600}
                textAlign="center"
                gutterBottom
              >
                {room.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                mb={3}
              >
                {room.desc}
              </Typography>

              <List dense>
                {room.text.map((item, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      fontSize: 15,
                      color: "text.secondary",
                      // py: 0.3,
                      px: 0,
                      display: "list-item",
                      listStyleType: "disc",
                      ml: 2,
                    }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Services;
