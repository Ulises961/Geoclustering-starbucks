import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { Toolbar,Typography,IconButton,AppBar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({[anchor]: open});
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
     
          <ListItem button key="Home" >
            <ListItemIcon> <HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="About" >
            <ListItemIcon><ApartmentIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>

      </List>

    </div>
  );

  return (
            <AppBar position="static">
                <Toolbar variant="regular">
                 
                  <MenuIcon
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit"
                    aria-label="menu" onClick={toggleDrawer('left',true)}  

                  />
                  <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                  </Drawer>
          
                    <Typography variant="h6" color="inherit">Menu</Typography> 
                </Toolbar>
                
            </AppBar>

  );
}
