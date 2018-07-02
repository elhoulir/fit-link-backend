const mongoose = require('mongoose')

// TODO: Create database for 'fit-link' on monogdb
// TODO: Modify code below to suit our project

// const url = 'mongodb+srv://brewster-t2myt.mongodb.net/' 
// const options = {
//     user: 'ruegen',
//     pass: process.env.MONGODB_USER_PASSWORD,
//     dbName: 'brewstercars',
//     promiseLibrary: global.Promise
// }

mongoose.connect(url, options)
    .then(() => {
        console.info(
            'mongodb db connection established'
        )
    })
    .catch(err => {
        console.error(
            `mongodb db failure: ${err.message}`
        )
    })

module.exports = mongoose