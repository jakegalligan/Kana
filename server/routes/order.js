const router = require('express').Router();
const Order = require('../models/order-schema');





// route which instantiates an order
router.post('/', (req,res) => {
    console.log(req.body);
    //create a new order with contents of body sent by client
    const newOrder = new Order (req.body)
    newOrder.save((err,order) => {
        if (err) return err;
        console.log('saved');
        console.log(order);
        res.send(order);
    })
})

//route which updates order
router.post('/:id', (req,res) => {
    let id = req.params.id
    let updates = req.body
    //find the specific order to update and update it with the desired values
    Order
        .findOneAndUpdate({uId: id}, updates)
        .exec((err,order) => {
            if (err) {
                res.status(400).send('Unable to update order, double check order Id')
            } else {
            console.log(order);
            res.send(order);
            }
        })
})

// route which gets orders
router.get('/', (req,res) => {

    //find the order the client wants and send it back
    Order
        .find({isCompleted: false})
        .exec((err, order) => {
            if (err) {
                res.status(400).send('Unable to get drinks');
            } else {
                res.send(order);
            }
        })
})



module.exports = router
