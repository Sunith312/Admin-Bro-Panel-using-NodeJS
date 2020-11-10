const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    adminname : String,
    adminemail : String
})

module.exports = mongoose.model('admin', adminSchema)
