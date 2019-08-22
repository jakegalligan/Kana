import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';
import {Link, Redirect} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderBar = () => {
    return (
    <StyledNavbar>
        <img 
            src='http://www.berkanacompany.com/wp-content/uploads/2014/05/logo-placeholder.jpg'
            width = '30'
            height = '30'
        />
        <Link to = '/admin/login'> Admin</Link>
    </StyledNavbar>
    )
}


export default HeaderBar;


//set styling for navbar
const StyledNavbar = styled(Navbar)`
    background-color: black;
    height: 8vh;
`;

