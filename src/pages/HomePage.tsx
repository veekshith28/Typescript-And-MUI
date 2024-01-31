import "../App.css";
import Header from "../components/Header";
import usecase from "../data/USECASE";
import features from "../data/FEATURES";
import UsecaseCard from "../components/UsecaseCard";
import FeatureCard from "../components/FeatureCard";
import BlogContainer from "../components/blogContainer";
import Button from "../components/Button";
import FAQ from "../components/FAQ";
import faqs from "../data/FAQ";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HomePage: React.FC = () => {
  const blogsData = [
    {
      title: "Growth Trajectory at EventHQ",
      date: "Jan 1, 2024",
      image:
        "https://assets-global.website-files.com/64eb36ca8bbb584cfce01de1/658ae54c4f2c9fc8bf214efb_EventHQ%27s%20Approach%20to%20Hiring%20and%20Nurturing%20Talent.png",
    },
    {
      title: "Growth Trajectory at EventHQ",
      date: "Jan 1, 2024",
      image:
        "https://assets-global.website-files.com/64eb36ca8bbb584cfce01de1/658ae54c4f2c9fc8bf214efb_EventHQ%27s%20Approach%20to%20Hiring%20and%20Nurturing%20Talent.png",
    },
  ];

  return (
    <Box className="container-default w-container">
      <Header
        header={"We finally fixed event marketing!"}
        context={
          "EventOps and intelligence platform purpose-built to support modern event marketing teams. Plan and analyze events with intelligence to derive better ROI from your event marketing engine."
        }
        button={"Join waitlist"}
        href="https://eventhq.typeform.com/waitlist?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&typeform-source=www.eventhq.com"
      />

      <Grid container alignItems="center">
        <Grid item>
          <Box my={5} padding={"50px"} mx={"50px"} alignItems={"center"}>
            <Typography
              variant="h3"
              alignItems={"center"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              One platform for your event marketing needs
            </Typography>
            <Typography variant="body1" textAlign={"center"}>
              The success of event marketing teams should not be dependant on
              siloed tools. EventHQ unifies data from all your event, CRM,
              customer success and relevant tools to help you device better ROI
              from events marketing.
            </Typography>
          </Box>
        </Grid>

        <Grid container spacing={10}>
          {usecase.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Box justifyContent={"space-between"}>
                <UsecaseCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Box className="footer-bottom">
        <Typography
          variant="h3"
          alignItems={"center"}
          textAlign={"center"}
          my={"10%"}
          fontWeight={"bold"}
        >
          Power up your event marketing
        </Typography>
      </Box>

      <Grid container spacing={1}>
        {features.map((feature, index) => (
          <Grid item xs={4} key={index}>
            <Box gap={4}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                // icon={feature.icon}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box className="cta-card cta-v3">
        <h2 className="cta-title">Ready to get started?</h2>
        <Button href="https://eventhq.typeform.com/waitlist?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&typeform-source=www.eventhq.com">
          Join Waitlist
        </Button>

        <button className="cta-card button">Meet the team</button>
      </Box>

      <Typography variant="h5" fontWeight={"normal"}>
        Blog
      </Typography>
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Typography
          variant="h3"
          alignItems={"center"}
          fontWeight={"bold"}
          maxWidth={"50%"}
        >
          Take a look at our latest articles and resources
        </Typography>
        <button className="cta-card button">Browse all posts</button>
      </Box>

      <Grid container spacing={1}>
        {blogsData.map((blog, index) => (
          <Grid item xs={4} key={index}>
            <Box margin={2}>
              {" "}
              {/* Apply margin using 'm' prop */}
              <BlogContainer
                title={blog.title}
                date={blog.date}
                Image={blog.image}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box className="faq-block ">
        <h2>Frequently asked questions</h2>
        <p>
          The nitty-gritty of our business that you'll probably ask yourself
          later
        </p>
        <Grid container spacing={1}>
          {faqs.map((faq, index) => (
            <Grid item xs={6} key={index}>
              <Box margin={2}>
                <FAQ key={index} question={faq.question} answer={faq.answer} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
