import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black'
    }
  }),
);

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h5">Incorta Plotter</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}