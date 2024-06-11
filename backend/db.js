const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    task: String
})

const User = new mongoose.model("User", userSchema)

module.exports = User