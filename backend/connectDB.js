const mongoose = require('mongoose')

function connectDB(uri){
    mongoose.connect(uri)
    .then(()=>{console.log('connected')})
    .catch((e)=>{console.log('Not connected',e)})
}

module.exports=connectDB