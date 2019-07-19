import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import DrawerAppBarLayout from "../components/DrawerAppBarLayout";
import IntroAnimation from "../components/IntroAnimation";
import AboutSection from "../components/AboutSection";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);
  const [skipped, setSkipped] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const timer1 = setTimeout(() => setShowIntro(false), 6500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  // disable intro for development
  if (process.env.NODE_ENV === "production" && showIntro && !skipped) {
    return <IntroAnimation onSkip={() => setSkipped(true)} />;
  }
  return (
    <div className={classes.root}>
      <DrawerAppBarLayout>
        <AboutSection />
      </DrawerAppBarLayout>
    </div>
  );
}
