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

module.exports = mongoose.model('order', OrderSchema);