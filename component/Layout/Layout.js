import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar,Typography,IconButton,AppBar } from "@material-ui/core";
import ReferenceMarkers from "../Markers/Reference/Reference";
import MenuIcon from '@material-ui/icons/Menu';
import Head from "next/dist/next-server/lib/head";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import styles from '../../styles/Home.module.css';
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
            {/* {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )} */}
            <footer> Created By ... </footer>

            </>

    );

    
}