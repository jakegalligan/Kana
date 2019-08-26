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
import AboutInfo from './AboutInfo';
import {Container, Row, Col} from 'react-bootstrap';




const LandingPage = () => {
    //import styling for material ui components
    const classes = useStyles();


    return (
        <Fragment>
          {/* <HeaderBar/> */}
          <Link to ='/admin/login'>
            <Typography className={classes.appTitle}>
                Admin
            </Typography>
            </Link>
          <StyledDiv>
          <StyledJumbotron>
            {/* <img className={classes.picture} src='http://www.wineclassifieds.co.za/wp-content/uploads/2016/12/1480606941_champagne-bottle-label-bocal.png' /> */}
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
          {/* <AboutInfo /> */}
        </Fragment>
    )
  };

  //create styling for jumbotron
  const StyledJumbotron = styled(Jumbotron)`
    height: 100vh;
    // background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
    background-image: url('https://images.vexels.com/media/users/3/157118/isolated/preview/b727153e9914545f716099e511ade298-wine-bottle-flat-icon-by-vexels.png');
    // width: 40vw;
    backgrounds-ize: 180% 100%;
    text-align: center;
    // background-size: 1000px
  `;

  const StyledDiv = styled(Container)`
  // height: 100vh;
  // width: 400;
  background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
  // background-image: url('https://ijcnlp2008.org/images/alcohol-clipart-glassware-2.png');
  background-repeat: no-repeat
  text-align: center;
  // background-size: 800px
  // margin-right: 50%,
  // backgroundSize: '180% 100%'
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

  
