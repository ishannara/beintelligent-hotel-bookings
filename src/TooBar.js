import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function ToolBar() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ flexGrow: 1 }}>
        {/* Menu icon only visible on small screens */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default ToolBar;
