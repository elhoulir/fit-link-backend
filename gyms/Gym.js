const mongoose = require('../db/connectdb')
const {Schema} = mongoose

const gymSchema = new Schema({
       name: {
           type: String,
           required: true,
           index: true
       },
       address: String
})

const Gym = mongoose.model('Gyms', gymSchema)

module.exports = Gym