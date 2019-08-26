import React, {useState} from 'react';import {Link} from 'react-router-dom';import { connect } from 'react-redux';
import Drink from './Drink';import {Container, Row, Col, Doo} from 'react-bootstrap';import styled from 'styled-components';
import { Typography } from '@material-ui/core';import { makeStyles } from '@material-ui/core/styles';


const DrinkMenuItems = (props) => {
    const classes= useStyles();
    //go through array of drinks and render them as drink components
    const renderDrinks = () => {
        return props.drinks.map((drink) => {
            return <Drink 
                    name={drink.Name}
                    ABV={drink.ABV}
                    price={drink.Price}
                    descriptor={drink.Descriptor}
                    ounce={drink.Ounces}
                    key={drink._id}
                    >
                    </Drink>
        })
    }
    return (
        <StyledContainer>
         {renderDrinks()}  
        </StyledContainer>
    )
}

const mapStateToProps =(state) => {
    return{
        drinks: state.drinks
    }
}

export default connect(mapStateToProps)(DrinkMenuItems);

 //create styling for container
 const StyledContainer = styled(Container)`
 text-align: center;
 padding-right: 30px;

`;

const useStyles = makeStyles({
    menuTitle: {
        color: 'white',
        fontSize: '30px',
        marginTop: '10px'
    }
    });
  