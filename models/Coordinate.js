const mongoose = require('mongoose')

const coordinateSchema = new mongoose.Schema({
    x:{
        type: Number,
        required: true,
       
    },
    y:{
        type: Number,
        required: true
    }
})

const coordinate = mongoose.model("Coordinate",coordinateSchema)

module.exports = coordinate