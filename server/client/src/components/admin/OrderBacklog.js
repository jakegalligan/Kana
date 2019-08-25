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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';





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
        <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
         
        </Typography>
        <Typography paragraph>
        {props.orders.length>=1?renderUncompletedOrders(): ''}

        </Typography>
      </main>
    </div>
  );
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

//   const useStyles = makeStyles({
//     container: {
//         backgroundColor: '#282828;',
//         // height: '200vh',
//         // paddingRight: '5%',
//         padding: '0',
//         width: '100vw',
//         maxWidth: '200vw',
//         marginTop: '1%',
//         marginRight: '0'
//     },
//     orderscontainer: {
//         background: 'linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff)',
//         height: '200vh',
//         textAlign: 'left',
//         maxWidth: '80%'
//     },
//     ordersHeader: {
//         background: '#282828',
//         display: 'none',
//         height: '8vh',
//         width: '100vw',
//         maxWidth: '2000px',
//         color: 'white',
//         fontSize: '30px'
//   },
//     statscontainer: {
//         // height:'100vh'
//     },
//     sideBar: {
//         background: '#282828',
//         zIndex: '10',
//                 boxShadow: '0 3px 5px 2px rgba(60, 60, 60, .5)',

//     },
//     sideBarContent: {
//         // marginTop: '5%',
//         color: 'white',
//         fontSize: '15px',
//         width: '120%'

//     },
//     sideBarTitle: {
//         color: 'white',
//         fontSize: '30px',
//         marginBottom: '20%'
//     },
//     sideBarItem: {
//         // margin: '10%',
//         // borderTop: 'solid 2px',
//         borderBottom: 'solid 2px',
//         borderColor: 'white',
//         // boxShadow: '0 3px 5px 2px rgba(60, 60, 60, .5)',
//         width: '100%',
//         marginLeft: '-8%',
//         height: '10vh',
//         padding: '10%'

//     }
// });


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));



// {props.orders.length>=1?renderUncompletedOrders(): ''}
