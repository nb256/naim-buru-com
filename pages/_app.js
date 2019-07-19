import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../lib/theme";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title key="title">Naim Buru</title>
          <meta
            key="description"
            name="description"
            content="Personal website of a full stack developer Naim Buru"
          />

          <meta key="og:url" property="og:url" content="https://naimburu.com" />
          <meta key="og:type" property="og:type" content="website" />
          <meta key="og:title" property="og:title" content="Naim Buru" />
          <meta
            key="og:description"
            property="og:description"
            content="Personal website of a full stack developer Naim Buru"
          />

          <meta key="og:locale" property="og:locale" content="en_US" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
