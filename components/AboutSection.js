import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Box from "@material-ui/core/Box";

import Project from "./Project";

const projectsmock = [
  {
    name: "React-redux based kanban board application",
    image: "https://naim-public.s3.amazonaws.com/kanbanello.png",
    description:
      "kassjdfkasjd fkasjdfkasdkfaj sdfkasdmck sadasdf as dfasf sjdfkasjd fkasjdfkasdkfaj sdfkasdmck sadasdf as dfasf sjdfkasjd fkasjdfkasdkfaj sdfkasdmck sadasdf as dfasf sjdfkasjd fkasjdfkasdkfaj sdfkasdmck sadasdf as dfasf sjdfkasjd fkasjdfkasdkfaj sdfkasdmck sadasdf as dfasf sjdfkasjd fkasjdfkasdkfaj sdfkasdmck sadasdf as dfasf jdfkasjd fkasjdfkasdkfaj sdfkasdmck sadasdf as dfasf a",
    demolink: "asdf",
    codelink: "asdf",
    date: new Date(1994, 10, 22).toISOString(),
    technologies: ["react", "redux"]
  },
  { image: "https://naim-public.s3.amazonaws.com/threejs2.png" },
  {}
];
const useStyles = makeStyles(theme => ({
  flexRowContainer: {
    display: "flex",
    flexDirection: "column"
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
        {/* <LeftArrowLinkImage src={leftArrowLinks} /> */}
        {/* <Box m={26} /> */}
        {/* </ScrollableAnchor> */}
      </Container>
      <Container maxWidth="md" className={classes.flexRowContainer}>
        {/* <ScrollableAnchor id={"projects"}> */}
        <ScrollableAnchor id={"projects"}>
          <Box m={6} />
        </ScrollableAnchor>
        <Box m={6} />
        <Typography variant="h3">Projects</Typography>
        <Box m={2} />
        <Divider />
        <Box m={6} />
        {projectsmock.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Container>
      <Container maxWidth="md" className={classes.flexRowContainer}>
        <ScrollableAnchor id={"work"}>
          <Box m={6} />
        </ScrollableAnchor>
        <Box m={6} />

        <Typography variant="h3">Work</Typography>
        <Box m={2} />
        <Divider />
        <Box m={6} />
        <Typography variant="body1">asdf</Typography>
      </Container>
      <Container maxWidth="md" className={classes.flexRowContainer}>
        <ScrollableAnchor id={"blogposts"}>
          <Box m={6} />
        </ScrollableAnchor>
        <Box m={6} />

        <Typography variant="h3">Blog Posts</Typography>
        <Box m={2} />
        <Divider />
        <Box m={6} />
        <Typography variant="body1">asdf</Typography>
      </Container>{" "}
    </>
  );
}
