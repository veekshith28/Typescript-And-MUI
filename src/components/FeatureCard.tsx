import React from "react";
import { Box, Typography } from "@mui/material";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  return (
    <Box>
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="body1">{props.description}</Typography>
    </Box>
  );
};

export default FeatureCard;
