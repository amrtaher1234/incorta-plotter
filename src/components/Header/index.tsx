import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "./../../assets/logo.png"; // Tell webpack this JS file uses this image

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    toolbar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "black",
    },
  })
);

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <img className={classes.logo} src={logo} />
          <Typography variant="h6">Incorta Plotter</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
