import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/dist/next-server/lib/head";
import Navbar from './Navbar';
export const siteTitle = 'K-Means';

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
  }));


export default function Layout({children, home ,tab}){

    const classes = useStyles();
    

    return (
            <>
              <Head>
                  <title>{siteTitle}</title>
                  <link rel="icon" href="/favicon.ico" />
                  <meta 
                  name="description"
                  content="Groupping Starbucks shops by their square surface" /> 
                  <meta name="og:title" content={siteTitle} />
              </Head>
            <Navbar />
            <main>{children}</main>
            <footer> Created By ... </footer>
          </>

    );
}