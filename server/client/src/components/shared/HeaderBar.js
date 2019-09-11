import React from 'react';import styled from "styled-components";import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';import Typography from '@material-ui/core/Typography';import { makeStyles } from '@material-ui/styles';

const HeaderBar = () => {    
    const classes= useStyles();
    return (
        <StyledNavbar>
            <Link to ='/admin/login'>
            <Typography className={classes.appTitle}>
                Admin
            </Typography>
            </Link>
        </StyledNavbar>
    )
}

export default HeaderBar;

//set styling for navbar
const StyledNavbar = styled(Navbar)`
    height: 8vh;
`;

const useStyles = makeStyles({
    appTitle: {
        color: 'White',
        fontSize: '30px',
        fontFamily: '\'Raleway\', sans-serif',
    }
})

