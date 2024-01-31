import React from "react"
import {Card, Box, CardContent, Typography} from "@mui/material"
import Button from "./Button"


interface FunctionalCardProps{
    title: string;
    description: string;
}


const FunctionalCard: React.FC<FunctionalCardProps>=(props)=>{

return(
<Card
sx={{
  height: "450px",
  width: "450px",
  backgroundImage: `url('https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/64eb36ca8bbb584cfce01ea3_unlock-the-power-of-website-analytics-bg-image-techflow-x-webflow-template.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "20px",
}}
>
<CardContent
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    ml: "50px",
    height: "100%",
  }}
>
  <Typography
    variant="h4"
    fontSize={30}
    my={"2px"}
    fontWeight={"bold"}
  >
    {props.title}
  </Typography>
  <Typography variant="body1" my={"2px"}>
   {props.description}
  </Typography>
  <Box alignItems={"center"} position={"relative"}>
    <Button href={undefined}>Get Started</Button>
  </Box>
</CardContent>
</Card>
)}
export default FunctionalCard;