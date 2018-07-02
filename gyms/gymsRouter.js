const express = require('express')
const router = express.Router()
const Gym = require('./Gym')

router.get('/', (req, res) => {



    Gym.find()
    .then(gyms => {
        res.status(200).json(gyms)
    })
    .catch(err => {
        throw new Error(err.message)
    })

})

module.exports = router

