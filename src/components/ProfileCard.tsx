import React from "react";
import "./ProfileCard.css"; // make sure to create a CSS file with this name
import { Box, Typography, Card, CardContent } from "@mui/material";

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  return (
    <Card
      sx={{
        maxWidth: "400px",
        backgroundColor: "fff",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{ alignContent: "center", padding: "20px", textAlign: "center" }}
      >
        <Box>
          <img src={props.image} className="profile-image" />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {props.name}
          </Typography>
          <Typography variant="h6" margin={"5px"}>
            {props.title}
          </Typography>
          <Typography variant="subtitle2" marginBottom={"10px"}>
            {props.bio}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

// .profile-image {
//   width: 100%;
//   height: 200px;
//   border-radius: 5%;
//   margin-bottom: 20px;
// }
