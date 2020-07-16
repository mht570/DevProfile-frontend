import NavBar from "./../../shared comp/navbar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

import Image from "./new.jpg";
import logo from "./logo.png";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

export default function MainPage() {
  return (
    <div>
      <NavBar />
      <div>
        <Paper style={styles.paperContainer}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              {/* <img src={logo} /> */}
              <h1>Developer Network</h1>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
