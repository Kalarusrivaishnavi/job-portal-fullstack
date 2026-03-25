const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Job = require("./models/Job");
const app = express();
let port = 5000;
app.use(cors());
app.use(express.json());
main().then(()=>{
    console.log("connection successful");
}).catch((err)=>
    console.log(err));
async function main(){
    await mongoose.connect("mongodb+srv://kalarusrivaishnavi_db_user:WjZe4SBEV2@cluster0.ivxcnsj.mongodb.net/jobportal");
};
app.listen(port,()=>{
    console.log(`server running on ${port}`);
});

app.post("/jobs", async(req,res)=>{
    try{
        const newJob = new Job(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch(err){
        res.status(500).json({message: err.message});
    }
});
app.get("/jobs",async(req, res)=>{
    try{
        const jobs = await Job.find();
        res.json(jobs); 
    } catch(err){
        res.json({message:err.message});
    }
    
});
app.put("/jobs/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedjob = await Job.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedjob){
            res.status(404).json({message:"job not found"});
        }
        res.json({message:"updated job"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }

})
app.delete("/jobs/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const deletedjob = await Job.findByIdAndDelete(id);
         if(!deletedjob){
            res.status(404).json({message:"job not found"});
        }
        res.json({message:"deleted job"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }

})