import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col, Doo} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faWineGlass, faCocktail, faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import {fetchDrinks} from '../../actions';
import { makeStyles } from '@material-ui/styles';



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
        <Container sticky='top'>
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
                    
                    Specials
                   
                </Col>
                <Col xs={3}>
               
                    Beer
                  
                </Col>
                <Col xs={3}>
                    Cocktails
                </Col>
                <Col xs={3}>
                    Wine
                </Col>
            </Row>
        </Container>
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
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
    //   padding: '0 30px',
    }
  });

  
