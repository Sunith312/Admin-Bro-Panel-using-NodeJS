const mongoose = require('mongoose')

//Access .env file
const dotenv = require('dotenv');
dotenv.config({path : 'config.env'})

const express = require('express');
const app = express()

//Importing user and admin Schema
const userSchema = require('./models/user')
const adminSchema = require('./models/admin')

//Importing Admin-bro configurations
const adminRouter = require('./router/admin.router')

//Accessing AdminPanel in Express
app.use('/admin', adminRouter);

//Connecting to the database and listen at port 8080
const run = async () => {
    const connection = await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    app.listen(8080, () => {
        console.log("AdminBro ready at http://localhost:8080/admin")
    })
}
run()



