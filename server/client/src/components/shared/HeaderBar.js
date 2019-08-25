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
            <Link to ='/'>
            <Typography className={classes.appTitle}>
                Kana
            </Typography>
            </Link>
        </StyledNavbar>
    )
}


export default HeaderBar;


//set styling for navbar
const StyledNavbar = styled(Navbar)`
// background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
height: 8vh;
`;


const useStyles = makeStyles({
    appTitle: {
        color: 'White',
        fontSize: '30px',
        fontFamily: '\'Raleway\', sans-serif',
    }
})

