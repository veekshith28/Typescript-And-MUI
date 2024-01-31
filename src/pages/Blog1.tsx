import React from "react";
import "./Blog.css";
import BlogContainer from "../components/blogContainer";
import "./About.css";
import "../App.css";
import Blogs from "../data/Blogs";
import {
  Box,
  Grid,
  Typography,
  CardContent,
  Card,
  TextField,
} from "@mui/material";
import BlogPost from "../components/Post";
import Button from "../components/Button";
import FunctionalCard from "../components/subcribeletter";
const BlogSection = () => {
  const blogPosts = [
    {
      image:
        "https://assets-global.website-files.com/64eb36ca8bbb584cfce01de1/658ae54c4f2c9fc8bf214efb_EventHQ%27s%20Approach%20to%20Hiring%20and%20Nurturing%20Talent.png",

      title: "EventHQ Raises $500K in Pre-Seed Funding Led by Powerhouse",
      date: "Dec 4, 2023",
    },
    {
      image:
        "https://assets-global.website-files.com/64eb36ca8bbb584cfce01de1/658ae54c4f2c9fc8bf214efb_EventHQ%27s%20Approach%20to%20Hiring%20and%20Nurturing%20Talent.png",

      title: "Creating a Category: Path to Pioneering Event Strategy",
      date: "Dec 4, 2023",
    },
  ];

  return (
    <Box className="container-default w-container">
      <Grid container>
        <Grid item xs={12} my={5}>
          <Box>
            <Typography variant="h6" fontWeight={"bold"}>
              BLOG
            </Typography>
            <Typography variant="h4" fontWeight={"bold"}>
              Blog And Resources
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          {blogPosts.map((post, index) => (
            <BlogPost key={index} image={post.image} title={post.title} />
          ))}
        </Grid>
        <Grid item xs={4}>
            <FunctionalCard title={"Subscribe to our newsletter"} description={"Get the latest on events, event strategies, event tech, EventHQ updates and more!"}/>
        </Grid>
      </Grid>

      <section>
        <Box my={8} width={"500px"} alignItems={"center"} mx={"300px"}>
        
            <Typography
              variant="h4"
              alignItems={"center"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Latest posts
            </Typography>
          <button className="cta-card button">Events 101</button>
          <button className="cta-card button">Events Marketing</button>
          <button className="cta-card button">About EventHQ</button>
        </Box>
      </section>

      <Grid container>
        {Blogs.map((blogPost, index) => (
          <Grid item xs={4} key={index}>
            <Box margin={2}>
              <BlogContainer
                title={blogPost.title}
                date={blogPost.date}
                Image={blogPost.Image}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;
