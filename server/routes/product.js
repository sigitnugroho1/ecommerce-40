var express = require('express');
var router = express.Router();
// var path = require('path');
let Product = require('../models/product');
// let EcomerceImage = require('../models/ecomerceimage');


/* GET users Listing. */
router.get('/', (req, res) => {
    Product.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.post('/', (req, res) => {
    // console.log(req.body);
    let data = new Product({
        id: Date.now(),
        title: req.body.title,
        rate: req.body.rate,
        description: req.body.description,
        price: req.body.price,
        brand: req.body.brand,
        detailProduct: req.body.detailProduct
    })
    data.save().then(item => {
        res.json(item)
    }).catch(err => {
        res.json(err)
    })
})



router.delete('/:id', (req, res) => {
    let id = req.params.id
    Product.findOneAndDelete({ id: id }).then(item => {
        if (item) {
            res.json({
                status: "SUCCESS",
                data: item
            })
        } else {
            res.json({
                error: true,
                message: `deleting data has been failed id :${id} not found`
            })
        }
    }).catch(err => {
        res.json(err)
    })
})



module.exports = router;