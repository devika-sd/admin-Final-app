const express=require('express');
const app= express();
const cors=require('cors');
require('colors');
const errorHandler=require('./middleware/errorhandler');
const databaseConnection=require('./db');
const userRoute = require('./routes/users');
const orderRoute = require('./routes/orders');
require('dotenv').config();


app.use(cors());

app.use(express.json());

databaseConnection();

app.use("/api/v1/users",userRoute);
app.use("/api/v1/orders",orderRoute);


app.use(errorHandler);

app.listen(8080,()=>{
    console.log("listening to the port 8080");
})