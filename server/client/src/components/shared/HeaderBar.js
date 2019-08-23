import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';
import {Link, Redirect} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import Typography from '@material-ui/core/Typography';



const HeaderBar = () => {
    return (
        <StyledNavbar>
            <Typography>
                LOGO
            </Typography>
        </StyledNavbar>
    )
}


export default HeaderBar;


//set styling for navbar
const StyledNavbar = styled(Navbar)`
    background-color: black;
    height: 8vh;
`;

