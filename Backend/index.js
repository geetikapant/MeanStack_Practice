const express= require("express");
const app=express();
const dotenv=require("dotenv")

const mongoose=require("mongoose");

dotenv.config();

//connect to db

mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology: true, useNewUrlParser: 
true },()=>console.log('connected to db'));

//Import Routes

const listinRoutes=require("./routes/listing");


//route middlewire

app.use("/api/listings",listinRoutes);
app.listen(4000,()=>console.log('server up and running on 4000'));