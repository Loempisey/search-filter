// const mongoose = require('mongoose');
//common js

const db = require('./../../models')
const connectionDB = async() =>{
    try{
        await db.mongoose.connect('mongodb://localhost:27017/test_api')
        console.log("==== Server is starting ====")
    }catch(err){
        throw error
    }
}

module.exports = connectionDB;
