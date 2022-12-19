const dotenv = require('dotenv');

const mongoose =require("mongoose")

const connection = async () => {
    try {
        
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log("Successfully connected")
    } catch (error) {
        console.log(error)
    }
}

connection()