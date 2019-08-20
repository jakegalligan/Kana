const router = require('express').Router();
const Drinks = require('../models/drink-schema');

router.get('/', (req,res) => {
    Drinks.find().exec((err,drinks) => {
        console.log(drinks);
        res.send(drinks);
    })

})


module.exports = router;