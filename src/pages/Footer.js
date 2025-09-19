import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Footer() {
  const navigate = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Rooms", path: "/rooms" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Box
        bgcolor={"#24303b"}
        color={"white"}
        px={10}
        py={4}
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        fontFamily="sans-serif"
      >
        <Box flex={1} minWidth={300} mb={4}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Hotely
          </Typography>
          <Typography sx={{ color: "gray" }} fontSize={14} maxWidth={280}>
            Experience unparalleled luxury and comfort at our exquisite
            beachfront resort. Your perfect getaway awaits.
          </Typography>
        </Box>

        <Box flex={1} minWidth={200} mb={4}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column" gap={0}>
            {navigate.map((route, index) => (
              <Link
                key={index}
                to={route.path}
                style={{
                  textDecoration: "none",
                  color: "gray",
                  padding: "6px 0",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d11d83";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "gray";
                }}
              >
                {route.label}
              </Link>
            ))}
          </Box>
        </Box>

        <Box minWidth={420}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Contact Us
          </Typography>
          <Box display="flex" flexDirection="column" gap={1.5}>
            <Typography sx={{ color: "gray" }}>123 Paradise Island</Typography>
            <Typography sx={{ color: "gray" }}> +1 (555) 123-4567</Typography>
            <Typography sx={{ color: "gray" }}>beintelligent.co.in</Typography>
          </Box>
        </Box>

        <Box maxWidth={420} mt={2}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Newsletter
          </Typography>
          <Box display="flex" flexDirection="column" gap={1.5}>
            <Typography sx={{ color: "gray" }}>
              Subscribe for special offers.
            </Typography>
            <Box display={"flex"} flexDirection={"row"} gap={1}>
              <TextField
                fullWidth
                size="small"
                placeholder="Your Email"
                sx={{
                  outline: "none",
                  border: "none",
                  color: "#ffffffff",
                  backgroundColor: "#fff",
                  borderRadius: 1,
                }}
              />
              <Button
                size="small"
                variant="contained"
                sx={{ background: "#ff4081", color: "#fff" }}
              >
                Go
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* sec footer */}
      <Box
        bgcolor={"#24242e"}
        px={8}
        py={3}
        display={"flex"}
        gap={4}
        justifyContent="space-between"
      >
        <Typography sx={{ color: "gray" }} fontSize={14} variant="h5">
          © 2025 Hotely. All Rights Reserved.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <IconButton
            sx={{
              color: "white",
              bgcolor: "#1877F2",
              "&:hover": { bgcolor: "#1565C0" },
            }}
          >
            <FacebookIcon fontSize="small" />
          </IconButton>

          <IconButton
            sx={{
              color: "white",
              bgcolor: "#1DA1F2",
              "&:hover": { bgcolor: "#0D8DDC" },
            }}
          >
            <TwitterIcon fontSize="small" />
          </IconButton>

          <IconButton
            sx={{
              color: "white",
              bgcolor: "#E4405F",
              "&:hover": { bgcolor: "#D81B60" },
            }}
          >
            <InstagramIcon fontSize="small" />
          </IconButton>

          <IconButton
            sx={{
              color: "white",
              bgcolor: "#EA4335",
              "&:hover": { bgcolor: "#C62828" },
            }}
          >
            <EmailOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
