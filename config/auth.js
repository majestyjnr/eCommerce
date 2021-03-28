const jwt = require('jsonwebtoken')
const config = require('config')

const getToken = (user) =>{
    jwt.sign({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
    },  config.get("jwtSecret"), { expiresIn: '24h' })
}

module.exports = getToken