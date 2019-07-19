import React from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import WorkIcon from "@material-ui/icons/Work";
import CreateIcon from "@material-ui/icons/Create";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import HomeIcon from "@material-ui/icons/Home";

import Link from "next/link";
import github from "../media/images/github.svg";
import linkedin from "../media/images/linkedin.svg";

// href = "https://calendly.com/naimburu"
// target = "_blank"
// rel = "noopener"
// title = "Schedule an online meeting with me"

const SocialLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
`;
const SocialLinkImage = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 3px;
`;

export default function Menu({ open }) {
  // hides tooltip when menu is on open state
  const renderWithTooltip = (component, title) => {
    if (open) {
      return component;
    }
    return (
      <Tooltip title={title} aria-label={title} placement="right">
        {component}
      </Tooltip>
    );
  };

  return (
    <>
      <List>
        {renderWithTooltip(
          <SocialLink href="#home">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>{" "}
          </SocialLink>,
          "Home"
        )}
        {renderWithTooltip(
          <SocialLink href="#projects">
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>{" "}
          </SocialLink>,
          "Projects"
        )}
        {renderWithTooltip(
          <SocialLink href="#work">
            <ListItem button>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Work Experience" />
            </ListItem>
          </SocialLink>,
          "Work experience"
        )}
        {/* <Link href="/blogposts">
          {renderWithTooltip(
            <ListItem button>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>,
            "Blog posts"
          )}
        </Link> */}
        {renderWithTooltip(
          <SocialLink href="#blogposts">
            <ListItem button>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
          </SocialLink>,
          "Blog posts"
        )}
      </List>
      <Divider />
      <List>
        {renderWithTooltip(
          <SocialLink
            href="https://github.com/nb256"
            target="_blank"
            rel="noopener"
          >
            <ListItem button>
              <ListItemIcon>
                <SocialLinkImage src={github} />
              </ListItemIcon>
              <ListItemText primary="Github" />
            </ListItem>
          </SocialLink>,
          "Github profile"
        )}
        {renderWithTooltip(
          <SocialLink
            href="https://www.linkedin.com/in/naimburu/"
            target="_blank"
            rel="noopener"
          >
            <ListItem button>
              <ListItemIcon>
                <SocialLinkImage src={linkedin} />
              </ListItemIcon>
              <ListItemText primary="Linkedin" />
            </ListItem>{" "}
          </SocialLink>,
          "Linkedin profile"
        )}
        {renderWithTooltip(
          <SocialLink
            href="mailto:nbur4u@gmail.com"
            target="_top"
            rel="noopener"
          >
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Mail me" />
            </ListItem>{" "}
          </SocialLink>,
          "Send an email to me (nbur4u@gmail.com)"
        )}
        {renderWithTooltip(
          <SocialLink
            href="https://naim-public.s3.amazonaws.com/CV-Europass-20190719-Buru-EN.pdf"
            target="_blank"
            rel="noopener"
          >
            <ListItem button>
              <ListItemIcon>
                <FileCopyIcon />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItem>{" "}
          </SocialLink>,
          "Resume"
        )}
      </List>
    </>
  );
}
