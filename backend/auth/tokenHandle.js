const jwt = require('jsonwebtoken')
const key ='key123'

const setRecord = (username) => {
    return jwt.sign(username,key)
}
const getRecord = (token) => {
    try{
        return jwt.verify(token,key)
    }
    catch(e){
        return false
    }
}

module.exports = {setRecord, getRecord}