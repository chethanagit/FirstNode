const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableschema = new Schema({

    name:{
        type:String
        //required : [true,'name is required']
    },

    seats:{
        type:String,
        //required : [true,'seats required']
    },

    available:{
        type:Boolean,
        default : false
    },

    

});

const Tables = mongoose.model('table',tableschema);

module.exports = Tables;