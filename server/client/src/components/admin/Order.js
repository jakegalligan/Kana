import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {sendNotification, claimDrink, submitDrink} from '../../actions'


const Order = (props) => {
    console.log(props);
    const classes = useStyles()
    //store the order in a variable for easier access
    let order = props.order;

    //when the claim buttons is clicked have the drink be claimed
    const handleClaimDrink = () => {
      console.log('claimed');
      if (props.isClaimed == true) {
        return '';
      }
      props.claimDrink(order.uId)
    }

    const handleSubmitDrink = () => {
      console.log('submit');
      // send drink to backend to have its isSubmitted property changed to true
      props.submitDrink(order.uId);
      // props.sendNotification(order.phoneNumber)
    

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
      <Card className={order.isClaimed ? classes.cardClaimed : classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {order.timeOrderSubmitted}
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
  },
  cardClaimed: {
    minWidth: 275,
    backgroundColor: 'yellow'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});