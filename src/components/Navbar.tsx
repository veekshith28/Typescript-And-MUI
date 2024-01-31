import React from "react";
import Button from "./Button";
import { Box, Typography } from "@mui/material";
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Box className="navbar-brand">
        <img
          src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/64eb45db19b3764ab9e7a8eb_EventHQ%20full%20primary.svg"
          alt="EventHQ "
          className="navbar-logo"
        />
      </Box>
      <Box className="navbar-menu">
        <a href="/" className="navbar-item">
          Home
        </a>
        <a href="/features" className="navbar-item">
          Features
        </a>
        <a href="/blog" className="navbar-item">
          Blog
        </a>
        <a href="/about" className="navbar-item">
          About
        </a>
      </Box>
      <Box className="navbar-end">
        <Button href="https://eventhq.typeform.com/waitlist?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&typeform-source=www.eventhq.com">
          Talk to us
        </Button>
      </Box>
    </nav>
  );
};

export default Navbar;
