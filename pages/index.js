import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Scrollbars } from "react-custom-scrollbars";
import kPoints from "./../Data/points.json";
import showFunc from "../Data/kmeans-clusters";
import Layout, { siteTitle } from "../component/Layout/Layout";
import Shop from "../component/Shop";
import { Box, Button, ButtonGroup } from "@material-ui/core";
import dBPoints from "../Data/dbscan-clusters";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

export async function getStaticProps() {
  const originalPoints = kPoints;
  const kOrganizedPoints = showFunc(originalPoints);
  const dbOrganizedPoints = dBPoints(originalPoints);

  return {
    props: { originalPoints, kOrganizedPoints, dbOrganizedPoints },
  };
}

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
  sidebar: {
    minHeight: "50vh",
    padding: "0 0.5rem",
    justifyContent: "center",
    alignSelf: "right",
    height: "70vh",
    flex: "1 1 40%",
    margin: " 1rem 1rem",
  },
  buttonset: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center safe",
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

export default function Home({
  originalPoints,
  kOrganizedPoints,
  dbOrganizedPoints,
}) {
  const MapWithNoSSR = dynamic(() => import("../component/Map/map"), {
    ssr: false,
  });

  const [markers, setMarkers] = useState(originalPoints);

  const [shop, setShop] = useState(null);

  const findInMap = (shop) => {
    setShop((current) => (current = shop));
  };

  const classes = useStyles();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg" component="section">
        <Box className={classes.title}>Starbucks in the world</Box>
        <Box className={classes.description}>
          - Application of DBScan and K-Means algorithms -
        </Box>
      </Container>

      <Box className={classes.infoblock}>
        <Box className={classes.map}>
          <MapWithNoSSR markers={markers} shop={shop} />
        </Box>

        <Box className={classes.sidebar}>
          <Box className={classes.buttonset}>
            <ButtonGroup
              variant="text"
              size="large"
              color="primary"
              aria-label="text primary button group"
            >
              <Button onClick={() => setMarkers(kOrganizedPoints.markers)}>
                Means Clustering
              </Button>
              <Button onClick={() => setMarkers(dbOrganizedPoints.markers)}>
                DBScan
              </Button>
              <Button
                onClick={() => {
                  setMarkers(originalPoints);
                  setShop(null);
                }}
              >
                Reset
              </Button>
            </ButtonGroup>
          </Box>
          <Scrollbars>
            {markers.map((point, index) => {
              return (
                <Shop
                  key={([point.Lat, point.Lon, point.Address], index)}
                  clicked={() => findInMap(point)}
                  city={point.City}
                  address={point.Address}
                  sqmt={point.Sqmt}
                  color={point.Color}
                />
              );
            })}
          </Scrollbars>
        </Box>
      </Box>
    </Layout>
  );
}
