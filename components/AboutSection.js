import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Box from "@material-ui/core/Box";

import Project from "./Project";
import Work from "./Work";
import BlogPost from "./BlogPost";
import { projectsMock, worksMock, blogPostsMock } from "../lib/mock-data";

const useStyles = makeStyles(theme => ({
  flexRowContainer: {
    display: "flex",
    flexDirection: "column"
  },
  typoCenter: {
    textAlign: "center"
  }
}));

export default function AboutSection() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <ScrollableAnchor id={"home"}>
          <Box m={6} />
        </ScrollableAnchor>
        <Typography variant="h3">Me</Typography>
        <Box m={2} />
        <Divider />
        <Box m={6} />
        <Typography variant="body1">
          I am a{" "}
          <a
            href="https://skillcrush.com/2017/02/27/front-end-back-end-full-stack/"
            target="_blank"
            rel="noopener"
          >
            <i>full stack developer</i>
          </a>{" "}
          who is passionate about modern software technologies and especially{" "}
          <b>React.js</b>, <b>GraphQL</b> and <b>Node.js</b>.
        </Typography>
        <Box m={1} />
        <Typography variant="body1">
          I am currently studying for{" "}
          <b>Master's Degree in Data Analytics &amp; Measurement </b> (Anadolu
          University, Turkey).
        </Typography>

        <Box m={1} />
        <Typography variant="body1">
          I have a <b>Bachelor's Degree in Computer Science </b> (Ege
          University, Turkey, 2017).
        </Typography>

        <Box m={6} />
        <Box m={2} />
        <a href="#projects">
          <ArrowDownwardIcon />
        </a>
        {""}
      </Container>
      <Container maxWidth="md" className={classes.flexRowContainer}>
        <ScrollableAnchor id={"projects"}>
          <Box m={6} />
        </ScrollableAnchor>
        <Box m={2} />
        <Typography variant="h3">Projects</Typography>
        <Box m={2} />
        <Divider />
        <Box m={6} />
        {projectsMock.map((project, index) => (
          <Project key={index} project={project} />
        ))}
        <Typography variant="body2" className={classes.typoCenter}>
          See more on{" "}
          <Link href="https://github.com/nb256" target="_blank" rel="noopener">
            my github
          </Link>
        </Typography>
      </Container>
      <Container maxWidth="md" className={classes.flexRowContainer}>
        <ScrollableAnchor id={"work"}>
          <Box m={6} />
        </ScrollableAnchor>
        <Box m={6} />

        <Typography variant="h3">Work</Typography>
        <Box m={2} />
        <Divider />
        <Box m={2} />
        {worksMock.map((work, index) => (
          <Work key={index} work={work} />
        ))}
      </Container>
      <Container maxWidth="md" className={classes.flexRowContainer}>
        <ScrollableAnchor id={"blogposts"}>
          <Box m={6} />
        </ScrollableAnchor>
        <Box m={6} />

        <Typography variant="h3">Blog Posts</Typography>
        <Box m={2} />
        <Divider />
        <Box m={2} />
        {blogPostsMock.map((blogPost, index) => (
          <BlogPost key={index} blogPost={blogPost} />
        ))}
        <Box m={6} />
      </Container>{" "}
    </>
  );
}
