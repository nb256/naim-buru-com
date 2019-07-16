import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import clsx from "clsx";
import { useSpring, animated } from "react-spring";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  typoCenter: {
    textAlign: "center"
  },
  marginTopBlock: {
    display: "block",
    marginTop: "200px"
  }
}));

export default function IntroAnimation() {
  const [count, setCount] = useState(6);
  const [finished, setFinished] = useState(false);
  const classes = useStyles();

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
            className={classes.typoCenter}
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
            className={classes.typoCenter}
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
            className={clsx(classes.typoCenter, classes.marginTopBlock)}
          >
            Intro ends in {count} seconds
          </Typography>
        </animated.div>
      </Grid>
    </Grid>
  );
}
