import React from "react";
import {Box, Grid, Typography} from "@mui/material"

interface BlogProps{
    title:string;
    image:string;
  }
  const BlogPost :React.FC<BlogProps> =(props) => {
    return (
      <Box className="blog-post">
        <Box>
          <img className="blog-image" src={props.image} alt="" />
        </Box>
        <Box className="blog-det">
          <Box className="blog-date">
            <Box>
              <span>About EventHq</span>
            </Box>
            <Box>
              <span>Dec 4 2023</span>
            </Box>
          </Box>
          <Box className="blog-title">
            <h1>{props.title}</h1>
          </Box>
  
          <Box className="">
            <p>Read more</p>
          </Box>
        </Box>
      </Box>
      
    );
  };
export default BlogPost;  