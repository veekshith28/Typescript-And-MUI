import React from "react";
import "./Usecase.css";
import { Grid, Box, Typography } from "@mui/material";

interface UsecaseProps {
  title: string;
  description: string;
  image: string;
}

const Usecase: React.FC<UsecaseProps> = (props) => {
  return (
    <Box className="container default">
      <Grid
        container
        direction={"row"}
        spacing={2}
        justifyContent={"space-between"}
      >
        <Grid item>
          <img className="img-bottom 32px" src={props.image} />
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginLeft: "2px", marginBottom: "2px" }}
          >
            {props.title}
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "2px" }}>
            {props.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Usecase;
