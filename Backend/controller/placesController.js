const express = require('express');
const productSchema = require('../model/productModel');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const checkAuth = require("../Middleware/check-auth");

router.use(bodyParser.urlencoded({ extended: false }));
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/products');


router.post('/post', (req, res, next) => {
    var newProduct = new productSchema({
        
        title: req.body.title,
    });

    newProduct.save().then(addedProduct => {
        res.status(201).json({
            message: "Product successfully added",
            postId: addedProduct._id,


        })
    })

    console.log("place added");


});

router.get('/getProduct', (req, res, next) => {
    console.log("inside backend of getProduct");
    productSchema.aggregate([{
        $group: {
            _id: { title: "$title" },
            ProductSchema: {
                $push: "$$ROOT"
            }
        }
    }], function(err, result) {
        console.log(result)
        res.status(200).json({
            error: err,
            result: result
        })

    })
})


router.get("/getProductDetails/:id", (req, res, next) => {

    productSchema.findById(req.params.id).then(product => {
        if (product) {
            res.status(200).json({
                message: "Place found successfully",
                product: product
            });
        } else {
            res.status(404).json({ message: " not found!" });
        }
    });
});



module.exports = router;
