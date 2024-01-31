import React from "react";
import "./blogContainer.css";
import { Box, Typography, Card, CardContent } from "@mui/material";


interface BlogProps {
  title: string;
  date: string;
  Image: string;
}

const BlogContainer: React.FC<BlogProps> = (props) => {
  return (
    <Card
      sx={{
        maxWidth: "400px",
        backgroundColor: "fff",
        borderRadius: "10px",
        overflow: "auto",
        contentWrapper: "auto",
      }}
    >
      <CardContent sx={{ padding: "20px", textAlign: "center" }}>
        <img src={props.Image} className="blog-image" />
        <Box>
          <Typography variant="h6" fontWeight={"bold"} margin={"3px"}>
            {props.title}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          textAlign={"left"}
        >
          <Typography>{props.date}</Typography>
          <Typography fontWeight={"bold"}>Read more</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogContainer;
{
  /*  */
}
