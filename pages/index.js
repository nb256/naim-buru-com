import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import DrawerAppBarLayout from "../components/DrawerAppBarLayout";
import IntroAnimation from "../components/IntroAnimation";

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
  if (showIntro && !skipped) {
    return <IntroAnimation onSkip={() => setSkipped(true)} />;
  }
  return (
    <div className={classes.root}>
      <DrawerAppBarLayout>a</DrawerAppBarLayout>
    </div>
  );
}
