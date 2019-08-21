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

OrderSchema.pre('save', function(next) {
    let currentDate = new Date();
    //set timeOrderSubmitted to current time on first save 
    if (!this.timeOrderSubmitted) {
        timeOrderSubmitted = currentDate;
    }
    //set submitted value to true on first save
    if (!this.isSubmitted) {
        isSubmitted = true;
    }

     next();
})

module.exports = mongoose.model('order', OrderSchema);