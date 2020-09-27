const express=require("express");
const {MongoClient}=require("mongodb");
const mongodb=require("mongodb")
const router=express.Router();
const mongoose=require("mongoose")

//to connect to mongo

async function loadTasksCollection(){
    const url="mongodb+srv://navin:1234@mytasklist.a75ix.mongodb.net/mytasklist?retryWrites=true&w=majority";
    const client=new MongoClient(url,{useNewUrlParser:true,useUnifiedTopology: true});
    try {
        await client.connect();
        console.log("sucess")
    } catch (error) {
        console.log(error);
        
    }
    return client.db("tasklist").collection("task");
    
    
}

// to read the task
router.get('/',async(req,res)=>{
    loadTasksCollection().catch(console.error)
    const task= await loadTasksCollection()
    res.send(await task.find({}).toArray())
    
});


//to insert the task
router.post('/',async(req,res)=>{
    
    const task=await loadTasksCollection()
    
    await task.insertOne({
        text:req.body.text,
        date:new Date()
    });
    res.status(201).send();
});

//to delete the task
router.delete('/:id',async(req,res)=>{
    const task =await loadTasksCollection()
    await task.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})



module.exports=router