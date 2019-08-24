import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LocalDrink from '@material-ui/icons/LocalDrink';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import IdIcon from '@material-ui/icons/PictureInPicture';
import Paper from '@material-ui/core/Paper';



const OrderCompleted = (props) => {
    const classes=useStyles();
    return (
       <Container className={classes.container}>
           <Row>
               <Col>
                    <Typography className={classes.mainHeader}>
                    Cheers {props.name}!!
                    </Typography>
                    <Typography className={classes.mainBody}>
                    Your order has been submitted!
                    </Typography>
               </Col>
           </Row>
           <Row>
               <Col xs={6}>
                   <Paper className={classes.paper}>
               <Typography className={classes.bodyHeader}>
                    <PhoneIphone className={classes.icon} />
                    </Typography>
                    <Typography className={classes.body}>
                    When your order is ready you will be texted
                    </Typography>
                    </Paper>
               </Col>
               <Col xs={6}>
                   <Paper className={classes.paper}>
               <Typography className={classes.bodyHeader}>
                    <IdIcon className={classes.icon} />
                    </Typography>
                    <Typography className={classes.body}>
                    Remember to bring your id for pickup
                    </Typography>
                    </Paper>
               </Col>
            </Row>
       </Container>
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
      backgroundColor: 'purple',
      height: '100vh',
  },
  body: {
      textAlign: 'center',
      margin: '5px'
  },
  mainHeader: {
      fontSize: '30px'
  },
  mainBody: {
      fontSize: '20px'
  },
  icon: {
      fontSize: '40px',
      margin: '20px',
  },
  paper: {
      height: '40vh',
      backgroundColor: 'purple',
      borderRadius: 40,

  }
  });


