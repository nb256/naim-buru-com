import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
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
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export default function Work({ work }) {
  const classes = useStyles();

  return (
    <CardContainer>
      <CardDetails>
        <FlexRow>
          <Typography component="h6" variant="h6" style={{ display: "inline" }}>
            {work.title}
          </Typography>
          <Typography
            variant="body2"
            style={{ display: "inline", margin: "3px 6px" }}
          >
            at
          </Typography>
          <Typography component="h6" variant="h6" style={{ display: "inline" }}>
            {work.company}
          </Typography>
        </FlexRow>
        <Typography variant="body2">
          {work.startDate && format(new Date(work.startDate), "MMMM YYYY")}
          {" - "}
          {work.endDate && format(new Date(work.endDate), "MMMM YYYY")}
        </Typography>
        <Box m={1} />

        <Typography variant="subtitle1" color="textSecondary">
          {work.description}
        </Typography>

        <div>
          {work.technologies &&
            work.technologies.map &&
            work.technologies.map((p, i) => (
              <Chip label={p} key={i} className={classes.chip} />
            ))}
        </div>
      </CardDetails>
    </CardContainer>
  );
}
