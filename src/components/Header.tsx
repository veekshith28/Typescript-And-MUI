import React from "react";

import { Box, Typography, Container } from "@mui/material";

import Navbar from "./Navbar";
import Button from "./Button";
import "../App.css";
interface HeaderProps{
  href: any;
  header: string;
  context: string;
  button: string;
}
const Header:React.FC<HeaderProps>=(props)=> {
  return (
    <>
      <Container maxWidth="lg">
        <header>
          <Box className="header">
            <Box className="inner-container _670px">
              <Typography variant="h2" className="header-h1-font-size">
                {props.header}
              </Typography>
              <Typography variant="body1">{props.context}</Typography>
              <Button href={props.href}>{props.button}</Button>
            </Box>
          </Box>
        </header>
      </Container>
    </>
  );
}

export default Header;
