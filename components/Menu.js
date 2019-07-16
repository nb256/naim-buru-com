import React from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import HomeIcon from "@material-ui/icons/Home";

import Link from "next/link";
import github from "../media/images/github.svg";
import linkedin from "../media/images/linkedin.svg";

const Index = () => (
  <div>
    <Link href="/about">
      HomeIcon
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

{
  /* <SocialLinks>
                 
                    <animated.div
                        className="card3"
                        style={{ transform: props.xy.interpolate(trans3) }}
                    >
                        <SocialLink
                            href="mailto:nbur4u@gmail.com"
                            target="_top"
                            title="Send an email to me (nbur4u@gmail.com)"
                        >
                            <SocialLinkImage src={mail} />
                        </SocialLink>
                    </animated.div>
                    <animated.div
                        className="card4"
                        style={{ transform: props.xy.interpolate(trans4) }}
                    >
                        <SocialLink
                            href="https://calendly.com/naimburu"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Schedule an online meeting with me"
                        >
                            <SocialLinkImage src={calendar} />
                        </SocialLink>
                    </animated.div>
                </SocialLinks>
                <SocialLinksMob>
                  

                    <SocialLink
                        href="mailto:nbur4u@gmail.com"
                        target="_top"
                        title="Send an email to me (nbur4u@gmail.com)"
                    >
                        <SocialLinkImage src={mail} />
                    </SocialLink>

                    <SocialLink
                        href="https://calendly.com/naimburu"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Schedule an online meeting with me"
                    >
                        <SocialLinkImage src={calendar} />
                    </SocialLink>
                </SocialLinksMob> */
}

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

const SocialLinksMob = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  @media (min-width: 601px) {
    display: none;
  }
`;
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
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>,
          "Home"
        )}
        {renderWithTooltip(
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>,
          "Projects"
        )}
        {renderWithTooltip(
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Work Experience" />
          </ListItem>,
          "Work experience"
        )}
        {renderWithTooltip(
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>,
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
            //   s3 resume public link
            //   href="mailto:nbur4u@gmail.com"
            target="_top"
            rel="noopener"
          >
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
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
