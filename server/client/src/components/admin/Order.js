import React, {useState} from 'react';import {Container, Row, Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';import Card from '@material-ui/core/Card';import CardActions from '@material-ui/core/CardActions';import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';import Typography from '@material-ui/core/Typography';import { connect } from 'react-redux';
import moment from 'moment';import {sendNotification, claimDrink, submitDrink} from '../../actions';import { Grow } from '@material-ui/core';

const Order = (props) => {
  const classes = useStyles()
  let order = props.order;
 
  let currentTime = new Date();
  //format the time the order was submitted in order to be more easily parsed
  let timeSubmitted = new Date(order.timeOrderSubmitted);
  //get the time difference from when the order was submitted to the current time
  let diffSubmitedAndNow = moment.utc(moment(currentTime,"DD/MM/YYYY hh:mm:ss").diff(moment(timeSubmitted,"DD/MM/YYYY hh:mm:ss"))).format("HH:mm:ss")
  
  //check to see if an order has been claimed
  let diffClaimedAndNow;
  if(order.timeOrderClaimed) {
    //if so format the time it was claimed
    let timeClaimed = new Date(order.timeOrderClaimed);
    //get the time difference from when the order was claimed and now
     diffClaimedAndNow = moment.utc(moment(currentTime,"DD/MM/YYYY hh:mm:ss").diff(moment(timeClaimed,"DD/MM/YYYY hh:mm:ss"))).format("HH:mm:ss")
  }

    //store the relative time since the order was submitted and the current time
    let timeSinceOrdered = moment(order.timeOrderSubmitted).fromNow();
    //instantiate a variable to store urgency or order
    let urgent;
    //if the order has been submitted for more than five minutes and not claimed make it urgent
    if (parseInt(diffSubmitedAndNow[4])>4) {
      urgent = true;
    }
    if (parseInt(diffSubmitedAndNow[3])>0) {
      urgent = true;
    }
    
    //when the claim buttons is clicked have the drink be claimed
    const handleClaimDrink = () => {
      //if the drink is already claimed return nothing
      if (props.isClaimed == true) {
        return '';
      } else {
      //send the drink to the server to have its claim property updated
      props.claimDrink(order.uId)
      }
    }

    const handleSubmitDrink = () => {
      // send drink to backend to have its isSubmitted property changed to true
      props.submitDrink(order.uId);
      props.sendNotification(order.phoneNumber, order.customerName)
    

    }

    //go through shopping cart and render each item
    const renderCart = () => {
      return order.cart.map(drink => {
        return (
          <div>
          <Typography className={classes.drinkName}>
            {drink.name}
          </Typography>
            <br />
            <Typography className={classes.drinkQuantity}>
            Quantity: {drink.quantity}
            </Typography>
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
          Ordered: {diffSubmitedAndNow}
        </Typography>
        {order.isClaimed? <Typography className={classes.title} color="textSecondary" gutterBottom>
          Claimed {diffClaimedAndNow} ago
        </Typography> : <div></div>}
        <Typography className={classes.name}>
          {order.customerName}
        </Typography>
        <Typography variant="body2" component="p">
          {renderCart()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} onClick={handleClaimDrink} size="small">Claim</Button>
        <Button className={classes.button} onClick={handleSubmitDrink} size="small">Submit</Button>
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
    width: '80%',
    margin: '1%',
    background: '#282828',

  },
  cardClaimed: {
    width: '80%',
    margin: '1%',
    borderStyle: 'solid',
    borderColor: '#007d04',
    background: '#282828',

  },

  cardUrgent: {
    width: '80%',
    margin: '1%',
    borderStyle: 'solid',
    borderColor: '#780800',
    background: '#282828',

  },
  title: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic',
  },
  drinkName:{
    color: 'white',
    fontSize: 14,
  },
  name: {
    color: 'white',
    fontSize: 14,
  },
  drinkQuantity: {
    color: 'white',
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: 'white',

  },
  button: {
    color: 'white'
  }
});