import Head from "next/head";
import { useEffect, useState } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import Layout, { siteTitle } from "../component/Layout/Layout";
import { Box, Container, makeStyles } from "@material-ui/core";
import Cookies from "js-cookie";
import SidebarLoader from "../component/Layout/Sidebar";

const useStyles = makeStyles({
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: "4rem",
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    lineHeight: 1.5,
    fontSize: "1.5rem",
  },

  infoblock: {
    minHeight: "90vh",
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    height: "100vh",
  },
  map: {
    padding: "0 0.5rem",
    justifyContent: "center",
    alignSelf: "flex-start",
    height: "70%",
    width: "40%",
    margin: "1rem 1rem",
  },
});

export default function Home() {
  const session = Cookies.get("SESSION_KEY");

  let loggedIn = false;
  session ? (loggedIn = true) : (loggedIn = false);

  const [markers, setMarkers] = useState(null);

  const [shop, setShop] = useState(null);

  useEffect(() => {
    if (!loggedIn) {
      Router.replace("/login");
    }
  }, [loggedIn]);

  const MapWithNoSSR = dynamic(() => import("../component/Map/map"), {
    ssr: false,
  });

  const findInMap = (shop) => {
    setShop(shop);
  };

  const classes = useStyles();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loggedIn && (
        <>
          <Container maxWidth="lg" component="section">
            <Box className={classes.title}>Starbucks in the world</Box>
            <Box className={classes.description}>
              - Application of K-Means algorithm -
            </Box>
          </Container>
          <Box className={classes.infoblock}>
            <Box className={classes.map}>
              <MapWithNoSSR markers={markers} shop={shop} />
            </Box>

            <SidebarLoader
              markers={markers}
              setMarkers={setMarkers}
              findInMap={findInMap}
              setShop={setShop}
            />
          </Box>
        </>
      )}
    </Layout>
  );
}
