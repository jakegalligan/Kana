const router = require('express').Router();
const Drink = require('../models/drink-schema');

//create get route to retrieve drinks with optional query parameter to specify type of drink
router.get('/', (req,res) => {
    let query = req.query.category;
    let filter;

    //if variable is not defined or specials set the query to search for the specials value 
    //otherwise set the query to search for drink by category number
    (!query || query == 'Specials') ? filter = {Special: 1}: filter = {Category: query} ;

    //retireve requested drinks and send them back to user
    Drink
        .find(filter)
        .exec((err,drinks) => {
            if (err || drinks.length == 0) {
                res.status(400).send('Unable to get drinks make sure a valid query was entered');
            } else {
            res.send(drinks);
            }
        })

})


module.exports = router;