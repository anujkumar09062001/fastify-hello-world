const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: String
})

const User = mongoose.model("User", UserSchema)

module.exports.User = User