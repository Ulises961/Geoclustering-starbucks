import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, CssBaseline, Typography } from "@material-ui/core";
import Head from "next/dist/next-server/lib/head";
import Navbar from "./Navbar";
export const siteTitle = "K-Means";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width:"100%",
    flexGrow: 1,
   
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    minHeight: "100vh",
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    width: "100%",
    marginTop: "auto",
    padding: theme.spacing(3, 2),
    backgroundColor: "black",
    color: "white",
    },
}));

Layout.propTypes = {
  children:  PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.node),
          PropTypes.node
      ]).isRequired
};

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Groupping Starbucks shops by their square surface"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className={classes.root}>
        <Navbar />
        <CssBaseline />
        <Box component="main" className={classes.main}>
          <Box>{children}</Box>
        </Box>
        <footer component="footer" className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">Created by ... </Typography>
          </Container>
        </footer>
      </div>
    </>
  );
}
