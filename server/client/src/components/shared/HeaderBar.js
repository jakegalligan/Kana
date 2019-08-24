import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';
import {Link, Redirect} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';



const HeaderBar = () => {
    const classes= useStyles();
    return (
        <StyledNavbar>
            <Typography className={classes.appTitle}>
                Kana
            </Typography>
        </StyledNavbar>
    )
}


export default HeaderBar;


//set styling for navbar
const StyledNavbar = styled(Navbar)`
background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    height: 8vh;
`;


const useStyles = makeStyles({
    appTitle: {
        color: 'White',
        fontSize: '30px'
    }
})
