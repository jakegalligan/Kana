import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Doo} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faWineGlass, faCocktail, faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import {fetchDrinks} from '../../actions';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styled from "styled-components";




const DrinkCategories = (props) => {
    const classes = useStyles();
    // on initial render, load specials
    useEffect(() => {
        props.fetchDrinks();
    }, []) 

    //Functions to get specific drinks from the server. Initially it was one dynamic function, but the svg icons were blocking the value of the elements
    const getWine =() => {
        props.fetchDrinks('Wine');
    }
    const getBeer =() => {
        props.fetchDrinks('Beer');
    }
    const getCocktails =() => {
        props.fetchDrinks('Cocktail');
    }
    const getSpecials =() => {
        props.fetchDrinks('');
    }


    //once there is a drink placed in the cart the cart appears

    //when the back menu is clicked the user is taken back to landingpage


    return (
        <div>
        {/* <Link to='/'><ArrowBack className={classes.nav} /></Link> */}
        <StyledContainer sticky='top'>
            <Row>
                <Col xs={3} value='Specials'>
                    <Button variant="contained"  className={classes.button} onClick={getSpecials} value='Specials'>
                    <FontAwesomeIcon className={classes.icon} icon={faGlassCheers} />
                    </Button>
                </Col>
                <Col xs={3}>
                <Button variant="contained"  className={classes.button} onClick={getBeer} value='Beer'>
                    <FontAwesomeIcon className={classes.icon} icon={faBeer} value='Beer' />
                </Button>
                </Col>
                <Col xs={3}>
                <Button className={classes.button} onClick={getCocktails} value='Cocktail'>
                    <FontAwesomeIcon className={classes.icon} icon={faCocktail} value='Cocktail' />
                    </Button>
                </Col>
                <Col xs={3}>
                <Button className={classes.button} onClick={getWine} value='Wine'>
                    <FontAwesomeIcon className={classes.icon} icon={faWineGlass} value='Wine' />
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    <Typography className={classes.descriptor}>
                        Specials
                    </Typography>
                </Col>
                <Col xs={3}>
                <Typography className={classes.descriptor}>
                        Beer
                    </Typography>
                </Col>
                <Col xs={3}>
                <Typography className={classes.descriptor}>
                        Cocktails
                    </Typography>
                </Col>
                <Col xs={3}>
                <Typography className={classes.descriptor}>
                        Wine
                    </Typography>
                </Col>
            </Row>
        </StyledContainer>
        </div>
    )
  };

  const mapDispatchToProps = {
      fetchDrinks: fetchDrinks
  }


  export default connect(null, mapDispatchToProps)(DrinkCategories);

   //create styline for button
const useStyles = makeStyles({
    button: {  
      marginTop: '15px',
      background: 'linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff)',
      border: 0,
      borderRadius: 9,
      boxShadow: '0 3px 5px 2px rgba(45, 45, 45, .3)',
      color: 'white',
      height: 48,
      width: '10px',
    },
    nav: {
        // marginLeft: '5px',
        // marginTop: 'px'
    },
    descriptor: {
        color: 'white',
        marginTop: '3px',
        fontFamily: '\'Raleway\', sans-serif',
    },
    buttonWrapper: {
        zIndex: '10'
    },
    icon: {
        fontSize: '30px'
    }
  });

   //create styling for container
   const StyledContainer = styled(Container)`
   text-align: center;
   padding-right: 30px;
   position: sticky;
   box-shadow: 0 0px 3px 1px rgba(45, 45, 45, .1);
//    border-style: solid;
//    border-bottom: 20px;
//    border-top: 0px;

   border-color: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)
   

 `;

  
