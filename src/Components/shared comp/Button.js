import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #1B5E20 30%, #C6FF00 90%)",
    border: 0,
    borderRadius: 40,
    textTransform: "none",
    boxShadow: "0 3px 5px 2px rgba(174, 234, 0, .3)",
    color: "white",
    width: "150px",
    height: 48,
    padding: "0 30px",
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Login</Button>;
}
