import React, {useState} from 'react';
import {Container, Row, Col, Doo} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faWineGlass, faCocktail, faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'


const DrinkCategories = (props) => {

    //on initial render, load specials

  //when a drink filter is clicked fetch the selected drinks
    const fetchDrinks = (e) => {
        console.log(e.target.value);
    }


    //once there is a drink placed in the cart the cart appears

    //when the back menu is clicked the user is taken back to landingpage


    return (
        <div>
        <Container sticky='top'>
            <Row>
                <Col xs={3}>
                    <Button onClick={e=>fetchDrinks(e)} value='Specials'>
                    <FontAwesomeIcon icon={faGlassCheers} />
                    Specials
                    </Button>
                </Col>
                <Col xs={3}>
                <Button onClick={e=>fetchDrinks(e)} value='Beer'>
                    <FontAwesomeIcon icon={faBeer} />
                    Beer
                    </Button>
                </Col>
                <Col xs={3}>
                <Button onClick={e=>fetchDrinks(e)} value='Cocktails'>
                    <FontAwesomeIcon icon={faCocktail} />
                    Cocktails
                    </Button>
                </Col>
                <Col xs={3}>
                <Button onClick={e=>fetchDrinks(e)} value='Wine'>
                    <FontAwesomeIcon icon={faWineGlass} />
                    Wine
                    </Button>
                </Col>
            </Row>
        </Container>
        </div>
    )
  };


  export default DrinkCategories;
  