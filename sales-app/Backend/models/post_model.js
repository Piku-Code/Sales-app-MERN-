const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    salesId: {
        type: Number,
        default: function () {
          // Generate a random number between 1000 and 9999
          return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        }
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
    
})

module.exports =  mongoose.model('PostModel', postSchema);