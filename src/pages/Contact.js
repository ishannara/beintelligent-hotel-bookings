import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { contactValidation } from "../validation/login-validate";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidation,
    onSubmit: () => {
      console.log("submited from: ", values);
      resetForm();
    },
  });
  let { values, errors, handleChange, submitForm, resetForm } = formik;
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="center"
        my={10}
        alignItems={"center"}
        flexDirection="column"
        gap={2}
      >
        <Typography variant="h4" fontFamily="sans-serif" fontWeight={600}>
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          textAlign={"center"}
          fontSize={"17px"}
          color="text.secondary"
        >
          We are here to help you. Reach out to us for any queries.
        </Typography>
      </Box>

      <Box
        display="flex"
        gap={3}
        justifyContent="center"
        flexDirection={"row"}
        flexWrap="wrap"
        mb={8}
      >
        <Card
          sx={{
            maxWidth: 990,
            width: "45%",
            p: 3,
            boxShadow: 3,
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography variant="h5" mb={1} fontWeight={600}>
                Send us a Message
              </Typography>
              <TextField
                value={values.name}
                error={typeof errors.name === "string"}
                onChange={handleChange}
                helperText={errors.name}
                size="small"
                id="name"
                placeholder="Your Name"
                fullWidth
              />
              <TextField
                value={values.email}
                error={typeof errors.email === "string"}
                onChange={handleChange}
                helperText={errors.email}
                size="small"
                id="email"
                placeholder="Your Email"
                fullWidth
              />
              <TextField
                value={values.subject}
                error={typeof errors.subject === "string"}
                onChange={handleChange}
                helperText={errors.subject}
                size="small"
                id="subject"
                placeholder="Your Subject"
                fullWidth
              />
              <TextField
                value={values.message}
                error={typeof errors.message === "string"}
                onChange={handleChange}
                helperText={errors.message}
                size="small"
                id="message"
                placeholder="Your Message"
                fullWidth
                multiline
                rows={2}
              />
              <Button
                onClick={submitForm}
                sx={{
                  background: "#ff4081",
                  color: "#fff",
                  fontWeight: 600,
                  "&:hover": { background: "#e73370" },
                }}
                startIcon={<SendIcon sx={{ fontSize: 20 }} />}
              >
                Send Message
              </Button>
            </Box>
          </CardContent>
        </Card>

        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" mb={2} fontWeight={600}>
            Contact Information
          </Typography>

          <Box display="flex" alignItems="center" mb={2} gap={3}>
            <LocationOnIcon sx={{ color: "#ff4081", mr: 1, fontSize: 35 }} />
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Our Address
              </Typography>
              <Typography color="text.secondary" fontSize={14}>
                123 Luxury Avenue, Paradise Island, Maldives
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" mb={2} gap={3}>
            <LocalPhoneIcon sx={{ color: "#ff4081", mr: 1, fontSize: 35 }} />
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Phone Number
              </Typography>
              <Typography color="text.secondary" fontSize={14}>
                +1 (555) 123-4567
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={3}>
            <EmailOutlinedIcon sx={{ color: "#ff4081", mr: 1, fontSize: 35 }} />
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Email Address
              </Typography>
              <Typography color="text.secondary" fontSize={14}>
                beintelligent.co.in
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </>
  );
}
