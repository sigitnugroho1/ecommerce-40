const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const Product = new Schema({
    id: {
        type: String, required: true
    },
    tittle: {
        type: String, required: true
    },
    rate: {
        type: Number
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    brand: {
        type: String
    },
    detailProduct: {
        type: String
    },
    image: {
        type: String
    },
    vote: {
        type: Number
    }
})



module.exports = mongoose.model('Product', Product)