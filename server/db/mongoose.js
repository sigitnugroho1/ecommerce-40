const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ecommerce-react', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})