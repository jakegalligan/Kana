import React, {useState, useEffect} from 'react';import Order from './Order';import {Container, Row, Col} from 'react-bootstrap';import {Link} from 'react-router-dom';import { connect } from 'react-redux';import {fetchOrders} from '../../actions';
import { makeStyles } from '@material-ui/core/styles';import Drawer from '@material-ui/core/Drawer';import AppBar from '@material-ui/core/AppBar';import Toolbar from '@material-ui/core/Toolbar';import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';import Divider from '@material-ui/core/Divider';import ListItem from '@material-ui/core/ListItem';import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';import HistoryIcon from '@material-ui/icons/History';import NotesIcon from '@material-ui/icons/Notes';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';import ContactSupport from '@material-ui/icons/ContactSupport';import moment from 'moment';import CssBaseline from '@material-ui/core/CssBaseline';

const OrderBacklog = (props) => {
    const classes = useStyles();
    // on initial page load get orers
    useEffect(() => {
        //fetch newly added orders every second
        setInterval(()=>{props.fetchOrders()},1000);
        
    },[])
    //go through all unCompleted orders in database and render them
    const renderUncompletedOrders = () => {
        return props.orders[0].map(individualOrder => {
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
            <Container>
            <Row>
                <Col>
            <Link to ='/'>
          <Typography className={classes.headerText} variant="h6" noWrap>
            Kana 
          </Typography>
          </Link>
          </Col>
          <Col md={{span:2, offset: 6}}>
          <Typography className={classes.clock} variant="h6" noWrap>
            {moment().format('hh:mm:ss')}
          </Typography>
          </Col></Row>
          </Container>
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
        <List className={classes.listIt}>
          {['Order History', 'Timesheets', 'Manager Portal', 'Kana Support'].map((text, index) => (
            <ListItem className={classes.listIt} button  key={text}>
              <ListItemIcon className={classes.icon}>{index === 0 ? <HistoryIcon /> : index === 1 ? <NotesIcon/>: index === 2? <SupervisorAccount/>: <ContactSupport/> }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
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


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    background: '#282828',

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#282828',

    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: '#282828',
    fontSize: 20,


  },
  drawerPaper: {
    width: drawerWidth,
    background: '#282828',
    color: 'white'

  },
  clock: {
    color: 'white',
    fontSize: '30px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    fontSize: 20,

  },
  toolbar: theme.mixins.toolbar,
  icon: {
      color: 'white'
  },
  listIt: {
    fontSize: 20,
  },
  headerText: {
      color: 'white',
      fontSize: '40px'
  }
}));



