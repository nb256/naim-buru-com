import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import clsx from "clsx";
import { useSpring, animated } from "react-spring";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  typoCenter: {
    textAlign: "center"
  },
  marginTopBlock: {
    display: "block",
    marginTop: "200px"
  },
  marginTopBlockMobile: {
    display: "block",
    marginTop: "20px"
  },
  marginLeft: {
    marginLeft: "5px"
  },
  staticHeight1: {
    height: "10vh"
  },
  staticHeight2: {
    height: "30vh"
  },
  staticHeight1Mobile: {
    height: "30vh"
  },
  staticHeight2Mobile: {
    height: "20vh"
  }
}));

export default function IntroAnimation(props) {
  const [count, setCount] = useState(6);
  const [finished, setFinished] = useState(false);
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    let timer1 = setInterval(() => setCount(count => count - 1), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const toggle = () => {
    setTimeout(() => setFinished(!finished), 1500);
  };

  const toggleAnimation = useSpring({
    opacity: finished ? 0 : 1,
    transform: finished ? "translate(0px,-30vh)" : "translate(0px,0px)"
  });

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10}>
        <animated.div style={toggleAnimation}>
          <Typist
            avgTypingDelay={20}
            cursor={{ show: false }}
            className={clsx(
              classes.typoCenter,
              mobile ? classes.staticHeight1Mobile : classes.staticHeight1
            )}
          >
            <Typography variant="h4" gutterBottom>
              &lt;Head>&#123;`$&#123;firstName&#125;
              $&#123;familyName&#125;`&#125;&lt;/Head>
            </Typography>
            <Typist.Backspace count={43} delay={1000} />
            <Typography variant="h2" gutterBottom>
              Naim Buru
            </Typography>
          </Typist>
          <Typist
            className={clsx(
              classes.typoCenter,
              mobile ? classes.staticHeight2Mobile : classes.staticHeight2
            )}
            cursor={{ show: false }}
            avgTypingDelay={20}
            startDelay={1000}
            onTypingDone={() => {
              toggle();
            }}
          >
            <Typography variant="h5" gutterBottom>
              &lt;Sub>&#123;title&#125;&lt;/Sub>
            </Typography>
            <Typist.Backspace count={43} delay={1000} />
            <Typography variant="h4" gutterBottom>
              Fullstack Developer
            </Typography>
          </Typist>
          <Typography
            variant="body2"
            className={clsx(
              classes.typoCenter,
              mobile ? classes.marginTopBlockMobile : classes.marginTopBlock
            )}
          >
            Intro ends in {count} seconds
            <Link
              href="#"
              onClick={() => props.onSkip && props.onSkip()}
              className={classes.marginLeft}
            >
              Skip
            </Link>
          </Typography>
        </animated.div>
      </Grid>
    </Grid>
  );
}
