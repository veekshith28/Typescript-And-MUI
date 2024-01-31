import React from "react";
import "./About.css";
import "../App.css";
import features from "../data/FEATURES";
import Button from "../components/Button";
import BlogContainer from "../components/blogContainer";
import FeatureCard from "../components/FeatureCard";
import ProfileCard from "../components/ProfileCard";
import Profiles from "../data/Profile";
import { Grid, Box, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <>
      <Box className="container-default w-container">
        <Grid container spacing={1} my={5}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h4"> About our Company</Typography>
            </Box>
            <Box>
              <Typography variant="body1" mt={2} mb={2}>
                At EventHQ, we are passionate about events, just like you.
                Founded by a team of industry veterans, EventHQ was born out of
                the need for a comprehensive and integrated solution to meet the
                evolving demands of event professionals.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Button href="https://www.eventhq.com/careers">Join our team</Button>

        <Grid container my={3}>
          <Grid item xs={6}>
            <Box>
              <img
                className="inner-image1"
                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01de1/658ae54c4f2c9fc8bf214efb_EventHQ%27s%20Approach%20to%20Hiring%20and%20Nurturing%20Talent.png"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box marginLeft={2}>
              <Typography variant="h5" padding={"10px"}>
                Our Vision
              </Typography>
              <Typography variant="body2"> To be essential platform</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h5" padding={"10px"} textAlign={"left"}>
                Our Vision
              </Typography>
              <Typography variant="body2"> To be essential platform</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <img
                className="inner-image1"
                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01de1/658ae54c4f2c9fc8bf214efb_EventHQ%27s%20Approach%20to%20Hiring%20and%20Nurturing%20Talent.png"
              />
            </Box>
          </Grid>
        </Grid>

        <Box my={8} width={"500px"} alignItems={"center"} mx={"300px"}>
          <Typography variant="h6" textAlign={"center"} fontWeight={"Light"}>
            Our Values
          </Typography>
          <Box textAlign={"center"}>
            <Typography
              variant="h3"
              alignItems={"center"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              The values that drive everything we do
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={1} my={5}>
          {features.map((feature, index) => (
            <Grid item xs={4} key={index}>
              <Box margin={"2px"}>
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  // icon={feature.icon}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box>
          <Typography variant="h3" my={5} fontWeight={"bold"}>
            Our team
          </Typography>
        </Box>

        <Grid container spacing={1}>
          {Profiles.map((profile, index) => (
            <Grid item xs={3} key={index}>
              <Box margin={"2px"}>
                <ProfileCard
                  image={profile.image}
                  name={profile.name}
                  title={profile.title}
                  bio={profile.bio}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default About;
