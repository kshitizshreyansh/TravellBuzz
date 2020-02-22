const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    
    
    //id: { type: String, requiired: true },
    placeType: {type: String, required: true},
    title: { type: String, required: true },
    Description: { type: String, required: true},
    image: { type: String, required: true},
    amount: {type: String, required: true},
    season: {type: [String], required: true}
    
});

module.exports = mongoose.model("Place", placeSchema);
