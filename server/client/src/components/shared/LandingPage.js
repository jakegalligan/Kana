import React, {useState} from 'react';
import styled from "styled-components";
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Button as BootButton} from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const LandingPage = () => {
    //import styling for material ui components
    const classes = useStyles();

    return (
        <div>
            <StyledJumbotron>
                <Button className={classes.button}>Hook</Button>
            </StyledJumbotron>
            </div>
    )
  };

  export default LandingPage;
  //create styling for jumbotron
  const StyledJumbotron = styled(Jumbotron)`
    height: 80vh;
    background-color: gray;
    background-image: url('https://image.shutterstock.com/image-photo/empty-wooden-bar-counter-defocused-260nw-740571541.jpg');
    text-align: center;
  `;

    //create styline for button
const useStyles = makeStyles({
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

  
