const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerName: String,
    phoneNumber: Number,
    uId: String,
    cart: Array,
    timeOrderCreated: Date,
    isSubmitted: Boolean,
    timeOrderSubmitted: Date,
    isClaimed: {type: Boolean, default: false},
    timeOrderClaimed: Date,
    isCompleted: {type: Boolean, default: false},
    timeOrderCompleted: Date,
})

module.exports = mongoose.model('order', OrderSchema);