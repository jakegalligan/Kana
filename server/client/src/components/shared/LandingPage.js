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
    // background-image: url('https://media.istockphoto.com/photos/empty-wooden-bar-counter-picture-id624494724?k=6&m=624494724&s=612x612&w=0&h=_rBlLq5e6ZklWpz2gCDI06IUmms2I4LuntrbxFo5w3A=');
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

  
