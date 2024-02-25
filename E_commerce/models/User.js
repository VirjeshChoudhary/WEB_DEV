const mongoose = require('mongoose'); //object
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
     // username - PLM(passport-local-mongoose)
    // password - PLM(passport-local-mongoose)
    email:{
        type:String,
        trim:true,
        required:true
    },
    gender:{
        type:String,
        trim:true,
        required:true
    }
})
userSchema.plugin(passportLocalMongoose);

let User =  mongoose.model('User' ,userSchema);

module.exports = User;
