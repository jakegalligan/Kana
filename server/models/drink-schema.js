const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema ({
    Category: {type: String, required: true},
    Name: {type: String, required: true},
    Price: {type: Number, required: true},
    Description: {type: String, required: true},
    Ounces: {type: Number, required: true},
    ABV: {type: Number, required: true},
    Special:{type: Number, required: true}, 
});

module.exports = mongoose.model('Drink', DrinkSchema, 'drinklist');