import React, {Fragment} from 'react';import {Redirect, Link} from 'react-router-dom';import styled from "styled-components";
import Jumbotron from 'react-bootstrap/Jumbotron';import { makeStyles } from '@material-ui/styles';import Button from '@material-ui/core/Button';
import HeaderBar from './HeaderBar';import uuidv1 from 'uuid';import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';import AboutInfo from './AboutInfo';import {Container, Row, Col} from 'react-bootstrap';

const LandingPage = () => {
    //import styling for material ui components
    const classes = useStyles();
    return (
        <div className={classes.box}>
          <Link to ='/admin/login' >
            <Typography className={classes.admin}>
                Admin <FontAwesomeIcon icon={faUserLock} />
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
        </div>
    )
  };

  //create styling for jumbotron
  const StyledJumbotron = styled(Jumbotron)`
    text-align: center;
    border-style: solid;
    border-color: white;
    margin-top: 20%;
  `;

  const StyledDiv = styled(Container)`
  background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
  background-repeat: no-repeat
  text-align: center;
  height: 100vh;
`;

    //create styline for button
const useStyles = makeStyles({
    button: {  
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

    },
    appTitle: {
      color: 'white',
      background: 'white'
    },
    box: {
      background: 'linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff)',
    },
    admin: {
      color: 'white',
      fontSize: '15px',
      textAlign: 'right',
      marginRight: '5%',
    },
    body: {
      color: 'white',
      fontFamily: '\'Raleway\', sans-serif',
    }
  });

  export default LandingPage;

  
