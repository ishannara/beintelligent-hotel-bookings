import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  Autocomplete,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ManIcon from "@mui/icons-material/Man";
import MenuIcon from "@mui/icons-material/Menu";
import { useFormik } from "formik";
import {
  bookingValidation,
  signFormValidation,
} from "../validation/login-validate";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const [roomValue, setRoomValue] = useState(null);
  const [guestValue, setGuestValue] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Login formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
    },
    validationSchema: signFormValidation,
    onSubmit: (values, { resetForm }) => {
      console.log("Login submitted: ", values);
      alert("successful submited");
      resetForm();
      setOpenLogin(false);
    },
  });

  // Booking formik
  const formik1 = useFormik({
    initialValues: {
      e_mail: "",
      room_type: "",
      check_in: "",
      check_out: "",
      guests: "",
    },
    validationSchema: bookingValidation,
    onSubmit: (values, { resetForm }) => {
      console.log("Booking submitted: ", values);
      alert("successful booking");
      resetForm();
      setOpenBooking(false);
    },
  });

  const options = ["Single Room", "Double Room", "Deluxe Room", "Suite"];
  const guests = [
    "1 Guest",
    "2 Guests",
    "3 Guests",
    "4 Guests",
    "5 Guests",
    "6 Guests",
    "7 Guests",
    "8 Guests",
    "9 Guests",
    "10 Guests",
  ];

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Room", path: "/rooms" },
    { text: "Services", path: "/services" },
    { text: "Gallery", path: "/gallery" },
    { text: "Blog", path: "/blog" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Drawer (Mobile Menu) */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText sx={{ color: "black" }} primary={item.text} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ mb: 3 }} />

          <Box display="flex" flexDirection="column" gap={1}>
            <Button
              size="medium"
              variant="outlined"
              color="inherit"
              startIcon={<ManIcon color="action" />}
              onClick={() => {
                setOpenLogin(true);
                setOpenDrawer(false);
              }}
            >
              Login / Sign Up
            </Button>
            <Button
              size="medium"
              variant="contained"
              sx={{ background: "#ff4081" }}
              onClick={() => {
                setOpenBooking(true);
                setOpenDrawer(false);
              }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Login Dialog */}
      <Dialog
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        PaperProps={{
          sx: { width: "100%", maxWidth: 500, borderRadius: 3, p: 2 },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600, fontSize: 22 }}>
          User Login
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography sx={{ fontWeight: 500 }}>Name</Typography>
            <TextField
              value={formik.values.name}
              error={typeof formik.errors.name}
              onChange={formik.handleChange}
              helperText={formik.errors.name}
              id="name"
              name="name"
              fullWidth
              size="small"
              placeholder="Your name"
            />
            <Typography sx={{ fontWeight: 500 }}>Email</Typography>
            <TextField
              value={formik.values.email}
              error={typeof formik.errors.email}
              onChange={formik.handleChange}
              helperText={formik.errors.email}
              name="email"
              id="email"
              fullWidth
              size="small"
              placeholder="Your email"
            />
            <Typography sx={{ fontWeight: 500 }}>Password</Typography>
            <TextField
              value={formik.values.password}
              error={typeof formik.errors.password}
              onChange={formik.handleChange}
              helperText={formik.errors.password}
              name="password"
              id="password"
              fullWidth
              size="small"
              type="password"
              placeholder="Your password"
            />
            <Typography sx={{ fontWeight: 500 }}>Contact</Typography>
            <TextField
              type="number"
              value={formik.values.contact}
              onChange={formik.handleChange}
              error={typeof formik.errors.contact}
              helperText={formik.errors.contact}
              id="contact"
              name="contact"
              fullWidth
              size="small"
              placeholder="Your contact"
            />
            <Button
              variant="contained"
              sx={{ mt: 1, fontWeight: 600 }}
              onClick={formik.submitForm}
            >
              Login
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Booking Dialog */}
      <Dialog
        open={openBooking}
        onClose={() => setOpenBooking(false)}
        PaperProps={{
          sx: { maxWidth: 700, borderRadius: 3, p: 3 },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>
          User Booking
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexWrap="wrap" alignItems="center" gap={2}>
            <Box width={"48%"}>
              <Typography
                fontWeight={500}
                mb={0.5}
                display="flex"
                alignItems="center"
              >
                <EmailOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                Email
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={formik1.values.e_mail}
                onChange={formik1.handleChange}
                error={typeof formik1.errors.e_mail}
                helperText={formik1.errors.e_mail}
                id="e_mail"
                name="e_mail"
                placeholder="Your email"
              />
            </Box>

            <Box width={"48%"}>
              <Typography fontWeight={500} mb={0.5}>
                Room Type
              </Typography>
              <Autocomplete
                options={options}
                value={roomValue}
                onChange={(_, newValue) => {
                  setRoomValue(newValue);
                  formik1.setFieldValue("room_type", newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Select room type"
                    error={typeof formik1.errors.room_type}
                    helperText={formik1.errors.room_type}
                  />
                )}
              />
            </Box>

            <Box width={"48%"}>
              <Typography
                fontWeight={500}
                mb={0.5}
                display="flex"
                alignItems="center"
              >
                <CalendarMonthOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                Check-in
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="date"
                value={formik1.values.check_in}
                onChange={formik1.handleChange}
                error={typeof formik1.errors.check_in}
                helperText={formik1.errors.check_in}
                id="check_in"
                name="check_in"
              />
            </Box>

            <Box width={"48%"}>
              <Typography
                fontWeight={500}
                mb={0.5}
                display="flex"
                alignItems="center"
              >
                <CalendarMonthOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                Check-out
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="date"
                value={formik1.values.check_out}
                onChange={formik1.handleChange}
                error={typeof formik1.errors.check_out}
                helperText={formik1.errors.check_out}
                id="check_out"
                name="check_out"
              />
            </Box>

            <Box width={"48%"}>
              <Typography
                fontWeight={500}
                mb={0.5}
                display="flex"
                alignItems="center"
              >
                <PeopleOutlineOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                Guests
              </Typography>
              <Autocomplete
                options={guests}
                value={guestValue}
                onChange={(_, newValue) => {
                  setGuestValue(newValue);
                  formik1.setFieldValue("guests", newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Select guests"
                    error={typeof formik1.errors.guests}
                    helperText={formik1.errors.guests}
                  />
                )}
              />
            </Box>

            <Box width={"48%"}>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: 1, fontWeight: 600, mt: 1 }}
                onClick={formik1.submitForm}
              >
                Booking Now
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Avatar src={logo} sx={{ width: 40, height: 40, mr: 1 }} />
            <Typography variant="h6">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Hotel Booking
              </Link>
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "black",
                    textTransform: "none",
                    "&:hover": {
                      color: "#ff6b6b",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          <Box display="flex" gap={1} alignItems="center">
            {isMobile ? (
              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Button
                  size="medium"
                  variant="outlined"
                  color="inherit"
                  sx={{ color: "black" }}
                  startIcon={<ManIcon color="action" />}
                  onClick={() => setOpenLogin(true)}
                >
                  Login / Sign Up
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ background: "#ff4081" }}
                  onClick={() => setOpenBooking(true)}
                >
                  Book Now
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
