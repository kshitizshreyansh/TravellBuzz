const express = require('express');
const placeSchema = require('../model/placeModel');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
//const checkAuth = require("../Middleware/check-auth");


router.use(bodyParser.urlencoded({ extended: false }));

router.post('/post', (req, res, next) => {
    var newPlace = new placeSchema({
        
        placeType: req.body.placeType,
        title: req.body.title,
        Description: req.body.Description,
        image: req.body.image,
        amount: req.body.amount,
        season: req.body.season
    });

    newPlace.save().then(addedPlace => {
        res.status(201).json({
            message: "Places successfully added",
            postId: addedPlace._id,


        })
    })

    console.log("place added");


});


router.get('/getPlace', (req, res, next) => {
    console.log("inside backend of getPlace");
    placeSchema.aggregate([{
        $group: {
            _id: { placeType: "$placeType" },
            PlaceSchema: {
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


router.get("/getPlaceDetails/:id", (req, res, next) => {

    placeSchema.findById(req.params.id).then(place => {
        if (place) {
            res.status(200).json({
                message: "Place1 found successfully",
                place: place
            });
        } else {
            res.status(404).json({ message: " not found!" });
        }
    });
});


module.exports = router;