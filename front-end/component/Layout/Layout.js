import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Head from "next/dist/next-server/lib/head";
import Navbar from "./Navbar";
export const siteTitle = "K-Means";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footer:{
    width: '100%',
    bottom:0,
    backgroundColor: 'black',
    color: 'white',
    height: '150px',
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
}

export default function Layout({children}) {
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
      <Navbar />
      <Box>{children}</Box>
      <Box component="footer"  className={classes.footer} > Created By ... </Box>
    </>
  );
}
