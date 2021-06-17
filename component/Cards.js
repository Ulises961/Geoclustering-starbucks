import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/Home.module.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
 });


export default function Shop(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const cardWidth = useMediaQuery('(min-width:360px)') ? classes.root : classes.reducedRoot;
  return (
    
    <Card>
      <CardContent >
        <Typography className={classes.title} color="textSecondary">
          Starbucks
        </Typography>
        <Typography variant="h5" component="h2">
          {bull} City: {props.city}
        </Typography>
        
        <Typography variant="h5" component="h2">
        {bull}  Adress: {props.address}
          </Typography>
          <Typography variant="h5" component="h2">
          {bull} Size: {props.sqmt} sq. mts.
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" onClick={props.clicked}>Find in map</Button>
      </CardActions>
    </Card>
  );
}
