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

    //when a drink filter is clicked fetch the selected drinks
    const getDrinks = (e) => {
        console.log(e.target.value);
        props.fetchDrinks(e.target.value)
    }


    //once there is a drink placed in the cart the cart appears

    //when the back menu is clicked the user is taken back to landingpage


    return (
        <div>
        {/* <Link to='/'><ArrowBack className={classes.nav} /></Link> */}
        <StyledContainer sticky='top'>
            <Row>
                <Col xs={3}>
                    <Button className={classes.button} onClick={e=>getDrinks(e)} value='Specials'>
                    <FontAwesomeIcon icon={faGlassCheers} />
                    </Button>
                </Col>
                <Col xs={3}>
                <Button className={classes.button} onClick={e=>getDrinks(e)} value='Beer'>
                    <FontAwesomeIcon icon={faBeer} />
                    </Button>
                </Col>
                <Col xs={3}>
                <Button className={classes.button} onClick={e=>getDrinks(e)} value='Cocktail'>
                    <FontAwesomeIcon icon={faCocktail} />
                    </Button>
                </Col>
                <Col xs={3}>
                <Button className={classes.button} onClick={e=>getDrinks(e)} value='Wine'>
                    <FontAwesomeIcon icon={faWineGlass} />
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
                        Wine
                    </Typography>
                </Col>
                <Col xs={3}>
                <Typography className={classes.descriptor}>
                        Cocktais
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
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 9,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      width: '11vh'
    },
    nav: {
        // marginLeft: '5px',
        // marginTop: 'px'
    }
  });

   //create styling for container
   const StyledContainer = styled(Container)`
   text-align: center;
   padding-right: 30px;

 `;

  
