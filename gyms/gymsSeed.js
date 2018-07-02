const Gym = require('./Gym')

const gyms = [
    {
        name: 'Fitco',
        address: '23 Swantson St, Melbourne'
    }   
]

Gym.create(gyms)
.then(() => {
    console.info(`seeded gyms`)
    
})