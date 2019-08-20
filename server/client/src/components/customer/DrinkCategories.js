import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col, Doo} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faWineGlass, faCocktail, faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import {fetchDrinks} from '../../actions'


const DrinkCategories = (props) => {

    //on initial render, load specials

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
                    <Button onClick={e=>getDrinks(e)} value='Specials'>
                    <FontAwesomeIcon icon={faGlassCheers} />
                    Specials
                    </Button>
                </Col>
                <Col xs={3}>
                <Button onClick={e=>getDrinks(e)} value='Beer'>
                    <FontAwesomeIcon icon={faBeer} />
                    Beer
                    </Button>
                </Col>
                <Col xs={3}>
                <Button onClick={e=>getDrinks(e)} value='Cocktail'>
                    <FontAwesomeIcon icon={faCocktail} />
                    Cocktails
                    </Button>
                </Col>
                <Col xs={3}>
                <Button onClick={e=>getDrinks(e)} value='Wine'>
                    <FontAwesomeIcon icon={faWineGlass} />
                    Wine
                    </Button>
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
  
