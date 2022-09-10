const mongoose = require('mongoose')

const data = new mongoose.Schema({
    DeviceId : {
        type : String,
        default : ""
    },
    DeviceType : {
        type : String,
        default : ""
    },
    Timestamp : {
        type : String,
        default : ""
    },
    location : {
        type : String,
        default : ""
    },
    
})

const Data = mongoose.model("DATA",data);
module.exports = Data