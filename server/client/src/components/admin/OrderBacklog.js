import React, {useState, useEffect} from 'react';
import Order from './Order';
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import {fetchOrders} from '../../actions';
import HeaderBar from '../shared/HeaderBar';
import { makeStyles } from '@material-ui/core/styles';
import { Grow } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';




const OrderBacklog = (props) => {
    const classes = useStyles();
    // on initial page load get orers
    useEffect(() => {
        //fetch newly added orders every second
        setInterval(()=>{props.fetchOrders()},6000);
        
    },[])
    //go throuhg all unCompleted orders in database and render them
    const renderUncompletedOrders = () => {
        return props.orders[0].map(individualOrder => {
            console.log('renderingtheprops');
            return (
            <Order
                order={individualOrder}
            >
            </Order>
            )
        })
    }
        
    return (
        <div>

        {/* <HeaderBar /> */}
        <Container className={classes.container}>
            <Row>
                <Col className={classes.sideBar} md={2}>
                    <Container className={classes.sideBarContent}>
                    <Container className={classes.sideBarTitle}>
                        Kana
                        </Container>
                        <Container className={classes.sideBarItem}>
                        Order History
                        </Container>
                        <Container className={classes.sideBarItem}>
                        Drink Recipes
                        </Container>
                        <Container className={classes.sideBarItem}>
                       Timesheets
                        </Container>
                        <Container className={classes.sideBarItem}>
                        Manager Portal
                        </Container>
                        <Container className={classes.sideBarItem}>
                        Kana Support 
                        </Container>
                    </Container>
                </Col>
                <Col md={{span: 9}}className={classes.orderscontainer}>
                    <Row>
                        <Container className={classes.ordersHeader}>
                           Orders
                        </Container>
                    </Row>
                    <Row>
                        {/* <Col> */}
                        {props.orders.length>=1?renderUncompletedOrders(): ''}
                        {/* </Col> */}
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
    )
  };

  const mapStateToProps =(state) => {
	return {
        orders: state.orderList
    }
}
   const mapDispatchToProps = {
       fetchOrders: fetchOrders
   }
  export default connect(mapStateToProps,mapDispatchToProps)(OrderBacklog);

  const useStyles = makeStyles({
    container: {
        backgroundColor: '#282828;',
        // height: '200vh',
        paddingRight: '5%',
        width: '100vw',
        maxWidth: '100vw',
        marginTop: '1%'
    },
    orderscontainer: {
        backgroundColor: 'white',
        height: '200vh',
        textAlign: 'center'
    },
    ordersHeader: {
        background: '#282828',
        height: '8vh',
        width: '100vw',
        maxWidth: '2000px',
        color: 'white',
        fontSize: '30px'
  },
    statscontainer: {
        // height:'100vh'
    },
    sideBar: {
        background: '#282828',
    },
    sideBarContent: {
        // marginTop: '5%',
        color: 'white',
        fontSize: '25px',
        width: '120%'

    },
    sideBarTitle: {
        color: 'white',
        fontSize: '30px',
        marginBottom: '20%'
    },
    sideBarItem: {
        // margin: '10%',
        // borderTop: 'solid 2px',
        borderBottom: 'solid 2px',
        borderColor: 'white',
        // boxShadow: '0 3px 5px 2px rgba(60, 60, 60, .5)',
        width: '100%',
        marginLeft: '-8%',
        height: '10vh',
        padding: '10%'

    }
});