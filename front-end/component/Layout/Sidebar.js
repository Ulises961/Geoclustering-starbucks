import pointsCollector from "../../pages/api/shopsInfoProvider";
import Shop from "../Shop";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Button, ButtonGroup, Box, makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useEffect } from "react";
import Home from "../../pages/home";
import { set } from "js-cookie";
const useStyles = makeStyles((theme) => ({
  circle: {
    display: "flex",
    justifyItems: "center",
    "& > * + *": {
      alignSelf:"center safe",
    },
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
}));

function Sidebar({
  originalPoints,
  kOrganizedPoints,
  setMarkers,
  setShop,
  findInMap,
}) {
  const classes = useStyles();
  useEffect(()=> setMarkers(originalPoints),[])
  return (
    <Box className={classes.sidebar}>
      <Box className={classes.buttonset}>
        <ButtonGroup
          variant="text"
          size="large"
          color="primary"
          aria-label="text primary button group"
        >
          <Button
            onClick={() => {
              setMarkers(kOrganizedPoints);
              setShop(null);
            }}
          >
            Means Clustering
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
        {originalPoints.map((point) => {
          return (
            <Shop
              key={point.shop_id}
              clicked={() => findInMap(point)}
              city={point.city}
              address={point.address}
              sqmt={point.sqmt}
              color={point.color}
            />
          );
        })}
      </Scrollbars>
    </Box>
  );
}

function Spinner() {
  const classes = useStyles();

  return (
    <Box className={classes.circle}>
      <CircularProgress />
     </Box>
  );
}
function Error() {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Failed loading information — <strong>Please refresh</strong>
    </Alert>
  );
}
export default function SidebarLoader({ setMarkers, findInMap, setShop }) {
  const originalPoints = pointsCollector("/shops");
  const kOrganizedPoints = pointsCollector("/k-clustered-shops");

  if (originalPoints.isLoading || kOrganizedPoints.isLoading)
    return <Spinner />;
  if (originalPoints.isError || kOrganizedPoints.isError) return <Error />;

 
  
  return (
    <Sidebar
      originalPoints={originalPoints.points}
      kOrganizedPoints={kOrganizedPoints.points}
      setMarkers={setMarkers}
      findInMap={findInMap}
      setShop={setShop}
    />
  );
}
