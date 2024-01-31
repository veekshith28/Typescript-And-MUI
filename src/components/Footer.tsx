import React from "react";
import "./Footer.css";
import { Box, Typography } from "@mui/material";


const Footer: React.FC=()=>{
  return (
    <footer className="footer">
      <Box className="footer-content">
        <Box className="footer-brand">
          <img
            src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/64eb45db19b3764ab9e7a8eb_EventHQ%20full%20primary.svg"
            alt="EventHQ "
            className="footer-logo"
          />
          <p>The first EventOps and intelligence platform</p>
        </Box>
        <Box className="footer-pages">
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </Box>
      </Box>
      <Box className="footer-bottom">
        <p>
          Copyright © EventHQ | If you can read this, there's nothing left to
          read.
        </p>
      </Box>
    </footer>
  );
}

export default Footer;
