// FeaturesHeader.jsx
import React, { useState } from "react";
import "./Features.css";
import DisplayFeatures from "../components/displayFeatures";
import eventOps from "../data/Eventops";
import Button from "../components/Button";
import { Box, Typography, Grid } from "@mui/material";

const FeaturesHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState("EVENTOPS");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const activeContent = eventOps.find((feature) => feature.title === activeTab);

  return (
    <>
      <Box className="container-default w-container">
        <Grid container spacing={1} my={5}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h3" fontWeight={"bold"}>
                {" "}
                Features
              </Typography>
              <Typography variant="body2">
                EventHQ is packed with features for you to make your event
                operations and marketing more productive.
              </Typography>
              <Box className="tab-buttons">
                {eventOps.map((feature, index) => (
                  <button
                    key={index}
                    className={`tab-button ${
                      activeTab === feature.title ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(feature.title)}
                  >
                    {feature.title}
                  </button>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box my={10}>
              {activeContent && (
                <DisplayFeatures
                  title={activeContent.title}
                  description={activeContent.description}
                  image={activeContent.image}
                />
              )}
            </Box>

            <Box className="cta-card cta-v3">
              <h2 className="cta-title">Ready to get started?</h2>
              <Button href={undefined}>Join Waitlist</Button>
              <button className="cta-card button">Meet the team</button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default FeaturesHeader;
