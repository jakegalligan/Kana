import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {sendNotification} from '../../actions'


const Order = (props) => {
    const classes = useStyles()
    //store the order in a variable for easier access
    let order = props.order;

    //create state that keep track whether or not buttons have been clicked
    const[claimed, setClaimed] = useState(false);
    const[submitted, setSubmitted] = useState(false)

    //when the claim buttons is clicked have the drink be claimed
    const claimDrink = () => {
      console.log('claimed');
      setClaimed(true);
    }

    const submitDrink = () => {
      console.log('submit');
      setSubmitted(true);
      props.sendNotification(order.phoneNumber)
      //send action to backend to be sumitted

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
      <div>
      {submitted ? '': 
      <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {order.timeOrderSubmitted}
        </Typography>
        <Typography variant="body2" component="p">
          {renderCart()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={claimDrink} size="small">Claim</Button>
        <Button onClick={submitDrink} size="small">Submit</Button>
      </CardActions>
    </Card> 
      }
    </div>
  ) 
  };

  const mapDispatchToProps = {
    sendNotification: sendNotification
  }

  export default connect(null,mapDispatchToProps)(Order);



const useStyles = makeStyles({
  card: {
    minWidth: 275,
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