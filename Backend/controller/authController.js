const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const router = express.Router();

const bcrypt = require('bcryptjs');

const saltRounds = 10;

const usersSchema = require('../model/userModel')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://amita:5SxAq8ihvbuN0WIv@cluster1-dm6iy.mongodb.net/test?retryWrites=true/E-commerce');
//mongoose.connect('mongodb://localhost/E-commerce');
mongoose.connect('mongodb+srv://amita:5SxAq8ihvbuN0WIv@cluster1-dm6iy.mongodb.net/travelbuzz?retryWrites=true/E-tourism');



router.post('/signup', (req, res, next) => {

   var hash = bcrypt.hashSync(req.body.password, saltRounds);
   var userJson = {
       name: req.body.name,
       username: req.body.username,
       password: hash,
       userType: req.body.userType,
       preference: req.body.preference
   };
   var users = new usersSchema(userJson);
   users.save(function(err, result) {
       console.log(result);

       if (err) {
           res.status(500).json(err);
       } else {
           const token = jwt.sign({ username: result["username"], id: result["productID"] }, 'this_must_be_a_long_string', { expiresIn: "1h" });
           res.status(200).json({
               status: "success",
               data: result,
               token: token
           })
       }
   })

});


router.post('/addplace', (req,res,next) => {
    console.log("inside backend addplace()");
    var preferenceJason = {
        title: req.body.titlep
    };
    var newPreference = new preferenceSchema(preferenceJason);
    console.log(newPreference);
    newPreference.save().then(addedPlace => {
        res.status(201).json({
            message: "Preference successfully added",
            postId: addedPlace._id,


        })
    })
});

router.post('/signin', (req, res, next) => {
    console.log("Entered Login :: ", req.body);

    usersSchema.findOne({ username: req.body.username }, function(err, result) {
        console.dir(result);
        if (err) {
            res.status(500).json(err);

        } else if (result != null) {

            if (bcrypt.compareSync(req.body.password, result["password"])) {
                // res.status(200).json({
                //     status: "success",
                //     data: result
                // })
                const token = jwt.sign({ username: result["username"], id: result["productID"] }, 'this_must_be_a_long_string', { expiresIn: "1h" });
                res.status(200).json({
                    status: "success",
                    data: result,
                    token: token,
                    expiresIn: 3600
                });
            } else {

                res.status(200).json({
                    status: "failure",
                    data: null
                })

            }

        }


    })

});



router.get('/', (req, res, next) => {
   res.status(200).json({
       name: "E-tourism: TravelBuzz"
   })
})

module.exports = router;
