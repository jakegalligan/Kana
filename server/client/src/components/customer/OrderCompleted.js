import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import LocalDrink from '@material-ui/icons/LocalDrink';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import IdIcon from '@material-ui/icons/PictureInPicture';
import Paper from '@material-ui/core/Paper';
import HeaderBar from '../shared/HeaderBar';
import Button from '@material-ui/core/Button';




const OrderCompleted = (props) => {
    console.log(props);
    console.log(props.name)
    const classes=useStyles();
    return (
        <div>
        <HeaderBar />
       <Container className={classes.container}>
           <Row>
               <Col>
                    <Typography className={classes.mainHeader}>
                    Cheers {props.name}
                    </Typography>
                    <Typography className={classes.mainBody}>
                    Your order has been submitted!
                    </Typography>
               </Col>
           </Row>
           <Row>
               <Col xs={12}>
                   <Paper className={classes.paper}>
               <Typography className={classes.bodyHeader}>
                    <PhoneIphone className={classes.icon} />
                    </Typography>
                    <Typography className={classes.body}>
                    When your order is ready you will be texted
                    </Typography>
                    <Link to ='/'>
                        <Button className={classes.button}>Back To Menu</Button>
                    </Link>
                    </Paper>
               </Col>
            </Row>
       </Container>
       </div>
    )
  };


  const mapStateToProps =(state) => {
	return {
		name: state.name
	}
}

export default connect(null,mapStateToProps)(OrderCompleted);


const useStyles = makeStyles({
  container: {
      textAlign: 'center',
      background: 'linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff)',
      height: '100vh',
  },
  body: {
      textAlign: 'center',
      margin: '5px',
      color: 'white'
  },
  mainHeader: {
      fontSize: '50px',
      color: 'white'
  },
  mainBody: {
      fontSize: '20px',
      color: 'white'
  },
  icon: {
      fontSize: '60px',
      margin: '20px',
      color: 'white'
  },
  paper: {
      height: '40vh',
      backgroundColor: 'transparent',
      borderRadius: 40,

  },
  button: {
      borderStyle: 'solid',
      borderColor: 'white'
  }
  });


