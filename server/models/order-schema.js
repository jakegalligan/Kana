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

// OrderSchema.pre('save', function(next) {
//     let currentDate = new Date();
//     //set timeOrderSubmitted to current time on first save 
//     if (!this.timeOrderSubmitted) {
//         this.timeOrderSubmitted = currentDate;
//     }
//     //set submitted value to true on first save
//     if (!this.isSubmitted) {
//         this.isSubmitted = true;
//     }

//      next();
// })

module.exports = mongoose.model('order', OrderSchema);