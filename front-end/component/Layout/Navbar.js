import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PublicIcon from "@material-ui/icons/Public";
import { Toolbar, Typography, AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Authenticator } from "../../pages/api/authenticationServices";
import Router from "next/router";
import Cookies from "js-cookie";
import { Link } from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };
  const logoutHandler = async () => {
    const api = new Authenticator();
    await api.logout();
  };
  const redirectHandler = (goTo) => {
    Router.push(goTo);
  };

  const loggedIn = Cookies.get("SESSION_KEY");

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {loggedIn && (
        <List>
          <ListItem button key="Home">
           
            <Link className={classes.links} href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            Home
            </Link>
          </ListItem>
          <ListItem button key="Map">
           
            <Link className={classes.links} href="/home">
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>Map
            </Link>
          </ListItem>
          <ListItem button key="Logout" onClick={logoutHandler}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      )}

      {!loggedIn && (
        <List>
          <ListItem button key="Home">
            <Link className={classes.links} href="/">
              {" "}
              <ListItemIcon>
                {" "}
                <HomeIcon />
              </ListItemIcon>
              Home
            </Link>
          </ListItem>
          <ListItem button key="Map">
            <Link className={classes.links} href="/login">
              {" "}
              <ListItemIcon>
                <LockOpenIcon />
              </ListItemIcon>
              Log in
            </Link>
          </ListItem>
          <ListItem button key="Register">
            <Link className={classes.links} href="/register">
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              Register
            </Link>
          </ListItem>
        </List>
      )}
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar variant="regular">
        <MenuIcon
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
        />
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>

        <Typography variant="h6" color="inherit">
          Menu
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
