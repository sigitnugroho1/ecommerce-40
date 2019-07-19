const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const ecomerceImage = new Schema({
    image: {
        type: String
    }

})



module.exports = mongoose.model('EcomerceImage', ecomerceImage)