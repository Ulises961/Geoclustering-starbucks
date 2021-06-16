import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Head from "next/dist/next-server/lib/head";
import { AppBar } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";


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

        <ScopedCssBaseline>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                name="description"
                content="Groupping Starbucks shops by their square surface" /> 
                <meta name="og:title" content={siteTitle} />
            </Head>
            <AppBar position="static">
                <Toolbar variant="prominent">
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">Cards</Typography>
                    <Button color ="inherit">Calculate</Button>
                </Toolbar>
            </AppBar>
            <main>{children}</main>
            {/* {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )} */}
            <footer> Created By ... </footer>

        </ScopedCssBaseline>

    );

    
}