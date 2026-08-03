const mongoose = require("mongoose");
require('dotenv').config();

async function connectDB(){

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connect successfully to MongoDB");
    } catch(error){
        console.log("Connect failed");
        process.exit(1);
    }
}

module.exports = connectDB;