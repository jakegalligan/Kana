import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';


const OrderCompleted = (props) => {
    const classes=useStyles();
    return (
       <Container className={classes.container}>
           <Row>
               <Col>
                    <Typography className={classes.mainHeader}>
                    Cheeres name
                    </Typography>
               </Col>
           </Row>
           <Row>
               <Col xs={4}>
               <Typography className={classes.bodyHeader}>
                    Cheeres name
                    </Typography>
                    <Typography className={classes.body}>
                    Cheeres name
                    </Typography>
               </Col>
               <Col xs={4}>
               <Typography className={classes.bodyHeader}>
                    Cheeres name
                    </Typography>
                    <Typography className={classes.body}>
                    Cheeres name
                    </Typography>
               </Col>
               <Col xs={4}>
               <Typography className={classes.bodyHeader}>
                    Cheeres name
                    </Typography>
                    <Typography className={classes.body}>
                    Cheeres name
                    </Typography>
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
  }
  });


