const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    
    
    //id: { type: String, requiired: true },
    title: { type: String, required: true },
    
    
    
});

module.exports = mongoose.model("Product", productSchema);
