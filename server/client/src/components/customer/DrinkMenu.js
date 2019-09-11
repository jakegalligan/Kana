import React from 'react';import {Link} from 'react-router-dom';import { connect } from 'react-redux';
import DrinkCategories from './DrinkCategories';import DrinkMenuItems from './DrinkMenuItems';
import OrderSubmitBar from './OrderSubmitBar';import styled from "styled-components";import Navbar from 'react-bootstrap/Navbar';
import Typography from '@material-ui/core/Typography';import { makeStyles } from '@material-ui/styles';import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'


const Menu = (props) => {
    const classes = useStyles();
    return (
        <div>
             <StyledNavbar>
                 <Container className={classes.container}>
                     <Row>
                        <Col xs={2}>
                            <Typography className={classes.appTitle}>
                                <Link to='/'>
                                <FontAwesomeIcon icon={faAngleLeft} className={classes.icon}/>
                                </Link>
                            </Typography>
                        </Col>
                         <Col xs={{offset: 2}}>
                            <Typography className={classes.appTitle}>
                                Menu
                            </Typography>
                         </Col>
                         <Col >
                         </Col>
                     </Row>
            </Container>
        </StyledNavbar>
            <DrinkCategories />
            <DrinkMenuItems  />
            <br />
            <br />
            <br />
            <br />
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
height: 8vh;
`;


const useStyles = makeStyles({
    appTitle: {
        color: 'White',
        fontSize: '30px',
        fontFamily: '\'Raleway\', sans-serif',
    },
    container: {
      textAlign: 'center' ,
      display: 'in-line' 
    },
    icon: {
        color: 'white'
    }
})



