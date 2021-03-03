const jwt = require('jsonwebtoken')

const getCurrentUser = () => {
    return jwt.decode(getToken())
}

const logoutUser = () => {
    localStorage.removeItem('foneapi')
}

const getToken = () => {
    return localStorage.getItem('foneapi')
}

module.exports = {
    getCurrentUser,
    logoutUser,
    getToken
}