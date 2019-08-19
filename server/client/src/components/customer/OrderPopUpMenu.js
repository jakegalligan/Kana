import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const OrderPopUpMenu = () => {
    const classes = useStyles();

    return (
        <div className={classes.appBar}>
        <AppBar position="static" color="default">
          <Toolbar>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default OrderPopUpMenu;


const useStyles = makeStyles({
    appBar: {
      flexGrow: 1,
      position: 'sticky',
      top: 'auto',
      bottom: 0
    },
  });