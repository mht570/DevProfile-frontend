import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import {
  Dialog,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import logo from "./logo.png";
import ClearIcon from "@material-ui/icons/Clear";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";

import "./login.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #1B5E20 30%, #C6FF00 90%)",
    border: 0,
    borderRadius: 40,
    textTransform: "none",
    boxShadow: "0 5px 5px 2px rgba(51, 105, 30, .5)",
    color: "white",
    width: "150px",
    height: 40,
    padding: "0 30px",
  },
  loginfiled: {
    // width: "40vw",
    color: "#388e3c",
    borderColor: "#388e3c !important",
  },
});

export default function Signup({ handleclick }) {
  const [open, setOpen] = React.useState(true);
  const [showPassword, setShow] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickShowPassword = () => {
    setShow(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    handleclick();
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen={true}
        open={open}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <Button onClick={handleClose}>
                <ClearIcon fontSize="large" style={{ color: "#388e3c" }} />
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <img src={logo} />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <h1 className="login_text">Welcome to DevNetwork</h1>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <h1 className="login_title">
                  Enter your email and create a password
                </h1>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid container justify="center" spacing={4}>
            <Grid item>
              <TextField
                id="filled-password-input"
                label="Email"
                type="text"
                autoComplete="current-password"
                variant="outlined"
                className="login-filed"
                InputLabelProps={{
                  className: classes.loginfiled,
                }}
                InputProps={{
                  classes: {
                    notchedOutline: classes.loginfiled,
                  },
                }}
              />
            </Grid>
          </Grid>
          <br />
          <Grid container justify="center" spacing={4}>
            <Grid item>
              <FormControl variant="outlined" style={{ color: "green" }}>
                {/* <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel> */}

                <TextField
                  id="filled-password-input"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  variant="outlined"
                  className="login-filed"
                  InputLabelProps={{
                    className: classes.loginfiled,
                  }}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.loginfiled,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <Grid container justify="center" spacing={4}>
            <Grid item>
              <FormControl variant="outlined" style={{ color: "green" }}>
                {/* <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel> */}

                <TextField
                  id="filled-password-input"
                  label="Confirm password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  variant="outlined"
                  className="login-filed"
                  InputLabelProps={{
                    className: classes.loginfiled,
                  }}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.loginfiled,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <Grid container justify="center">
            <Button className={classes.root} onClick={handleClose}>
              SignUp
            </Button>
          </Grid>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
