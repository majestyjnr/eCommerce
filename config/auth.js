const jwt = require('jsonwebtoken')
const config = require('config')

const getToken = (user) =>{
    jwt.sign(user,  config.get("jwtSecret"), { expiresIn: '24h' })
}

export {
    getToken
}