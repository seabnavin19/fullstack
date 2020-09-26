const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const app=express();

//use middleware
app.use(express.json());
app.use(cors());

//add the link to the api
const task=require("./routes/api/tasklist");
app.use("/api/tasklist",task);

//to set the port 
const port=process.env.PORT || 5000;
app.listen(port,()=>console.log("serer"));
