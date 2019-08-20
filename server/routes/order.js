const router = require('express').Router();
const Order = require('../models/order-schema');

//create post route which instantiates an order
router.post('/', (req,res) => {

    //create a new order with contents of body sent by client
    const newOrder = new Order (req.body)
    newOrder.save((err,order) => {
        if (err) return err;
        res.send(order);
    })
})

//create route which updates order


module.exports = router
