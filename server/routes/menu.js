const router = require('express').Router();
const DrinkList = require('../models/drink-schema');

//create get route to retrieve drinks with optional query parameter to specify type of drink
router.get('/', (req,res) => {
    let query = req.query.category;
    let filter;
    //if variable is not defined or specials set the query to search for the specials value 
    //otherwise set the query to search for drink by category number
    (!query || query == 'Specials') ? filter = {Special: 1}: filter = {Category: query} ;

    DrinkList
        .find(filter)
        .exec((err,drinks) => {
            if (err) {
                res.status(400).send('Unable to get drinks make sure a valid query was entered');
            }
            res.send(drinks);
        })

})


module.exports = router;