import React, {Fragment} from 'react';
import {Redirect, Link} from 'react-router-dom'
import styled from "styled-components";
import Jumbotron from 'react-bootstrap/Jumbotron'
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import HeaderBar from './HeaderBar';
import uuidv1 from 'uuid'
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';
import AboutInfo from './AboutInfo';



const LandingPage = () => {
    //import styling for material ui components
    const classes = useStyles();


    return (
        <Fragment>
          <HeaderBar/>
          <StyledJumbotron>
              <Typography className={classes.header}>
                Kana
              </Typography>
              <Typography className={classes.body}>
                Mobile Drink Ordering
              </Typography>
              <br />
              <Link to={`/customer/menu/`}>
                  <Button className={classes.button}>
                      Order Now
                  </Button>
                  <br />
                  <br />
              </Link>
              <Link to = '/admin/login'>
                 <Button className={classes.button}>
                      Admin
                  </Button>
                  </Link> 
          </StyledJumbotron>
          <AboutInfo />
        </Fragment>
    )
  };

  //create styling for jumbotron
  const StyledJumbotron = styled(Jumbotron)`
    height: 80vh;
    background-color: gray;
    // background-image: url('https://static.vecteezy.com/system/resources/previews/000/207/756/non_2x/people-drinking-in-a-busy-bar-vector.jpg');
    text-align: center;
    background-size: 1000px
  `;

    //create styline for button
const useStyles = makeStyles({
    button: {  
      background: 'linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(68, 0, 158, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    header: {
      color: 'white',
      fontFamily: '\'Raleway\', sans-serif',
      fontSize: '15vh'
    },
    body: {
      color: 'white',
      fontFamily: '\'Roboto\', sans-serif'
    }
  });

  export default LandingPage;

  
