import { Box, Card, Typography } from "@mui/material";
import outside from "../assets/outside.png";
import privteBeach from "../assets/privteBeach.jpg";
import poolside from "../assets/poolside.jpg";
import resort from "../assets/rest.jpg";
import overwater from "../assets/overwater.jpg";
import swimmingpool from "../assets/swimmingpool.jpeg";

export const Gallery = () => {
  const images = [
    { title: "Outside View", img: outside },
    { title: "Private Beach View", img: privteBeach },
    { title: "Swimming Pool View", img: swimmingpool },
    { title: "Resort View", img: resort },
    { title: "Poolside View", img: poolside },
    { title: "Overwater View", img: overwater },
  ];

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        my={6}
        alignItems="center"
        flexDirection="column"
        gap={2}
      >
        <Typography variant="h4" fontFamily="serif" fontWeight={600}>
          Gallery
        </Typography>
        <Typography variant="body1" fontSize="17px" color="text.secondary">
          Discover the beauty of our resort
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={3}
        mb={4}
      >
        {images.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 650,
              height: 490,
              boxShadow: 3,
              borderRadius: 3,
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover .overlay": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <Box
              className="overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                color: "white",
                textAlign: "center",
                py: 2,
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.3s ease",
              }}
            >
              <Typography variant="subtitle1" fontWeight={500}>
                {item.title}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};
