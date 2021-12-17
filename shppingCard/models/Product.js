const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },
    name: { 
        type: String,
        required: true 
    },
    info: {
        type: {
            storageCapacity : Number,
            numOfSim : String,
            cameraResolutoin : Number,
            displaySize : Number,
        },
        required: true    
    },
    price:{
        type: Number,
        required: true    
    }
})


module.exports = mongoose.model('Product', productSchema)