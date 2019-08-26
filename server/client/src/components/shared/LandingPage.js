import React, {Fragment} from 'react';import {Redirect, Link} from 'react-router-dom';import styled from "styled-components";
import Jumbotron from 'react-bootstrap/Jumbotron';import { makeStyles } from '@material-ui/styles';import Button from '@material-ui/core/Button';
import HeaderBar from './HeaderBar';import uuidv1 from 'uuid';import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons';import AboutInfo from './AboutInfo';import {Container, Row, Col} from 'react-bootstrap';

const LandingPage = () => {
    //import styling for material ui components
    const classes = useStyles();
    return (
        <Fragment>
          <Link to ='/admin/login'>
            <Typography className={classes.appTitle}>
                Admin
            </Typography>
            </Link>
          <StyledDiv>
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
          </StyledJumbotron>
          </StyledDiv>
        </Fragment>
    )
  };

  //create styling for jumbotron
  const StyledJumbotron = styled(Jumbotron)`
    height: 100vh;
    text-align: center;
  `;

  const StyledDiv = styled(Container)`
  background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
  background-repeat: no-repeat
  text-align: center;
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
      fontFamily: '\'Roboto\', sans-serif'

    },
    header: {
      color: 'white',
      fontFamily: '\'Raleway\', sans-serif',
      fontSize: '15vh',
      marginTop: '15%'

    },
    appTitle: {
      color: 'white',
      background: 'none'
    },
    body: {
      color: 'white',
      fontFamily: '\'Raleway\', sans-serif',
    }
  });

  export default LandingPage;

  
