import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

Shop.propTypes= {

    city : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    sqmt: PropTypes.number.isRequired,
    clicked: PropTypes.func.isRequired
};


export default function Shop(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Starbucks
        </Typography>
        <Typography variant="h5" component="h2">
          {bull} City: {props.city}
        </Typography>
        <Typography variant="h5" component="h2">
          {bull} Color: {props.color}
        </Typography>

        <Typography variant="h5" component="h2">
          {bull} Adress: {props.address}
        </Typography>
        <Typography variant="h5" component="h2">
          {bull} Size: {props.sqmt} sq. mts.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.clicked}>
          Find in map
        </Button>
      </CardActions>
    </Card>
  );
}
