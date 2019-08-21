const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerName: String,
    phoneNumber: Number,
    cart: Array,
    timeOrderCreated: Date,
    isSubmitted: Boolean,
    timeOrderSubmitted: Date,
    isClaimed: Boolean,
    timeOrderClaimed: Date,
    isCompleted: Boolean,
    timeOrderCompleted: Date,
})

// OrderSchema.pre('save', (next) => {
//     let currentDate = new Date();
//     //if there is no timeorder created value, set it 
//     if (!this.)
//     //
//     next();
// })

module.exports = mongoose.model('order', OrderSchema);