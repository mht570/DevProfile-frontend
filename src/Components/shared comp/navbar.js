import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./nav.css";
import logo from "./logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: "Poppins",
    [theme.breakpoints.up("xs")]: {
      fontSize: "13px",
      marginTop: "7px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "15px",
      marginTop: "13px",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Grid item xs={6}>
              <Grid container justify="flex-start" alignContent="flex-start">
                <img src={logo} className="logo" />

                <h1 className="navfont">DevNetwork</h1>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="flex-end" alignContent="flex-start">
                <Grid item>
                  <Button color="inherit" className={classes.title}>
                    Login
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" className={classes.title}>
                    SignUp
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
