import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
export default function BlogPost({ blogPost }) {
  return (
    <CardContainer>
      <CardDetails>
        <Link href={blogPost.link} target="_blank" rel="noopener">
          <Typography component="h6" variant="h6" style={{ display: "inline" }}>
            {blogPost.title}
          </Typography>
        </Link>
        <Typography variant="body2">
          {blogPost.date && format(new Date(blogPost.date), "MMMM YYYY")}
          {" - "}
          {"in " + blogPost.language + " language"}
        </Typography>
      </CardDetails>
    </CardContainer>
  );
}
