import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBar from '../shared/HeaderBar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import moment from 'moment';
import {sendNotification, claimDrink, submitDrink} from '../../actions'
import { Grow } from '@material-ui/core';



const Order = (props) => {
  let order = props.order;

  let now = new Date();
  console.log(now)
  let then = new Date(order.timeOrderSubmitted);
  console.log(then);
  let diff = moment.utc(moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")
  console.log(diff);
    const classes = useStyles()
    //store the relative time since the order was submitted and the current time
    let timeSinceOrdered = moment(order.timeOrderSubmitted).fromNow();
    //instantiate a variable to store urgency or order
    let urgent;
    //if the order has been over ten mintues or an hour set urgent to true
    if (timeSinceOrdered.includes('hour')) {
      urgent = true;
    } else if (timeSinceOrdered.includes('minute') && timeSinceOrdered[1] !==' ') {
      urgent=true
    }
    
    //when the claim buttons is clicked have the drink be claimed
    const handleClaimDrink = () => {
      //if the drink is already claimed return nothing
      if (props.isClaimed == true) {
        return '';
      }
      //send the drink to the server to have its claim property updated
      props.claimDrink(order.uId)
    }

    const handleSubmitDrink = () => {
      console.log('submit');
      // send drink to backend to have its isSubmitted property changed to true
      props.submitDrink(order.uId);
      props.sendNotification(order.phoneNumber)
    

    }

    //go through shopping cart and render each item
    const renderCart = () => {
      return order.cart.map(drink => {
        return (
          <div>
            {drink.name}
            <br />
            Quantity: {drink.quantity}
          </div>
        )
      })
    }
    return (
      // if the drink isClaimed render its background as yellow and if it is urgent render its backgorund as red
      //otherwise leave the background color as white
      <Grow in={true} timeout={800}>
      <Card className={order.isClaimed ? classes.cardClaimed : urgent? classes.cardUrgent : classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {timeSinceOrdered}
        </Typography>
        <Typography variant="body3" component="p">
          {order.customerName}
        </Typography>
        <Typography variant="body2" component="p">
          {renderCart()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClaimDrink} size="small">Claim</Button>
        <Button onClick={handleSubmitDrink} size="small">Submit</Button>
      </CardActions>
    </Card> 
    </Grow>
  ) 
  };

  const mapDispatchToProps = {
    sendNotification: sendNotification,
    claimDrink: claimDrink,
    submitDrink: submitDrink
  }

  export default connect(null,mapDispatchToProps)(Order);



const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: '60%',
    margin: '8px',
  },
  cardClaimed: {
    minWidth: 275,
    width: '60%',
    margin: '8px',
    backgroundColor: '#007d04'
  },

  cardUrgent: {
    minWidth: 275,
    width: '60%',
    marginTop: '8px',
    backgroundColor: '#990000'
  },
  title: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  pos: {
    marginBottom: 12,
  },
});