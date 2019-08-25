import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import DrinkCategories from './DrinkCategories'
import DrinkMenuItems from './DrinkMenuItems';
import OrderSubmitBar from './OrderSubmitBar';
import HeaderBar from '../shared/HeaderBar'
import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import {Container, Row, Col} from 'react-bootstrap';



const Menu = (props) => {
    const classes = useStyles();
    return (
        <div>
             <StyledNavbar>
                 <Container className={connect.container}>
                     <Row>
                         <Col>
                         <Typography className={classes.appTitle}>
                K
            </Typography>
                         </Col>
                         <Col >
                         <Typography className={classes.appTitle}>
                Kana
            </Typography>
                         </Col>
                         <Col >

                         </Col>
                     </Row>
            </Container>
        </StyledNavbar>
            <DrinkCategories />
            <DrinkMenuItems  />
            {props.cart.length>0? <OrderSubmitBar />: ''}
        </div>
    )
}

function mapStateToProps(state) {
	return {
		cart : state.cart
	}
}


export default connect(mapStateToProps)(Menu);


//set styling for navbar
const StyledNavbar = styled(Navbar)`
// background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
height: 8vh;
`;


const useStyles = makeStyles({
    appTitle: {
        color: 'White',
        fontSize: '30px'
    },
    container: {
      textAlign: 'center' ,
      display: 'in-line' 
    }
})



