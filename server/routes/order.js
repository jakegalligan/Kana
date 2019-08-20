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

//create route which gets individual order by id
router.get('/:id', (req,res) => {
    let id = req.params.id;
    Order
        .findById(id)
        .exec((err, order) => {
            if (err) {
                res.status(400).send('Unable to find order');
            } else {
                res.send(order);
            }
        })
})


module.exports = router
