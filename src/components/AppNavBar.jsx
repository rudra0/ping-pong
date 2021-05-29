import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Badge, CircularProgress, IconButton, LinearProgress } from '@material-ui/core';

export default function AppNavBar() {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
        <AppBar color="default" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="primary" className={classes.appTitle}>
              Ping Pong Game
            </Typography>
          </Toolbar>
        </AppBar>
      <Toolbar style={{ marginBottom: 60 }}/>
    </>
  );
}

const useStyles = makeStyles(theme => ({
  appbar: {
    boxShadow: "0 4px 12px 5px rgba(0,0,0,.05)",
    background: "#fff",
    alignItems: 'center',
  },
  appTitle: {
    fontFamily: `'Bangers', cursive`,
    fontSize: 40
  },
  toolbar: {
    // minHeight: 128,
    minWidth: '60%',
    marginLeft: '20%',
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      marginLeft: '0%',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))
