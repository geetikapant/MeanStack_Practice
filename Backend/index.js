const express= require("express");
const app=express();

//Import Routes

const listinRoutes=require("./routes/listing");


//route middlewire

app.use("/api/listings",listinRoutes);
app.listen(4000,()=>console.log('server up and running on 4000'));