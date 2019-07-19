import React from "react";
import clsx from "clsx";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GithubIcon from "../media/images/githubWhite.svg";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const CardContainer = styled.div`
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
  @media (min-width: 651px) {
    flex-direction: row;
  }
  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
  padding: 10px;
  margin-bottom: 20px;
  @media (min-width: 651px) {
    padding: 20px;
  }
`;
const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  @media (min-width: 651px) {
    flex: 2;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 30%;
  border-radius: 4px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
  @media (min-width: 651px) {
    flex: 1;
  }
  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: 10px;
  }
  padding: 15px;
  object-fit: contain;
`;
const CleanAnchor = styled.a`
  text-decoration: none;
`;
const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export default function Project({ project }) {
  const classes = useStyles();

  return (
    <CardContainer>
      <CardDetails>
        <Typography component="h5" variant="h5">
          {project.name}
        </Typography>
        <Typography variant="body2">
          {project.date &&
            distanceInWordsToNow(new Date(project.date), { addSuffix: true })}
        </Typography>
        <Box m={1} />

        <Typography variant="subtitle1" color="textSecondary">
          {project.description}
        </Typography>

        <Box m={2} />

        <div>
          {project.codelink && (
            <CleanAnchor href={project.codelink} target="_blank" rel="noopener">
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
              >
                <ButtonIcon src={GithubIcon} />
                Codes
              </Button>
            </CleanAnchor>
          )}
          {project.demolink && (
            <CleanAnchor href={project.demolink} target="_blank" rel="noopener">
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
              >
                <ExitToAppIcon
                  className={clsx(classes.leftIcon, classes.iconSmall)}
                />
                Demo
              </Button>
            </CleanAnchor>
          )}
        </div>
        <div>
          {project.technologies &&
            project.technologies.map &&
            project.technologies.map((p, i) => (
              <Chip label={p} key={i} className={classes.chip} />
            ))}
        </div>
      </CardDetails>
      <CardImage src={project.image} alt="Screenshot of project" />
    </CardContainer>
  );
}
