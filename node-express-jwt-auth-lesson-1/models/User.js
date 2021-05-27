const mongoose = require('mongoose');
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    emaill:{
        type:String,
        required:[true, 'Please enter email'],
        unique:true,
        lowercase:true,
        validate:[isEmail, 'Please enter an valid email']
    },
    password:{
        type:String,
        required:[true, 'Please enter am password'],
        minLength:[6, 'Minimum password length is 6 characters']
    },
});

const User = mongoose.model('user', userSchema);

modules.exports = User;