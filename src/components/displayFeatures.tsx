import "../pages/Features.css";
import React from "react";
import { Box, Typography, Grid, Container, ListItem } from "@mui/material";


interface DisplayFeaturesProps{
  title: string,
  description:  string,
  image: string
}
const DisplayFeatures: React.FC<DisplayFeaturesProps>=(props)=>{

  return (
    <>

      <Grid container spacing={1} mt={3}>
        <Grid item xs={6}>
          { <img src={props.image} /> }
        </Grid>
        <Grid item xs={6}>
        <Box>
          <Typography variant="h4" >
            {props.title}
          </Typography>
          <Typography variant="body1" >
            {props.description}
          </Typography>
        </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box>
          <h3 className="heading-h6-size">Budgeting and scenarios</h3>
          <p className="mg-bottom-0">
            Budget, create predictions and compare data to predict the best
            outcomes.
          </p>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <h3 className="heading-h6-size">Budgeting and scenarios</h3>
          <p className="mg-bottom-0">
            Budget, create predictions and compare data to predict the best
            outcomes.
          </p>
        </Grid>
        <Grid item xs={4}>
          <h3 className="heading-h6-size">Budgeting and scenarios</h3>
          <p className="mg-bottom-0">
            Budget, create predictions and compare data to predict the best
            outcomes.
          </p>
        </Grid>
       
      </Grid>
    </>
  );
}

export default DisplayFeatures;
