import express from "express";
import mongoose from "mongoose";
import data from "./model/userSchema.js";


const app = express()
const port = 4000
app.use(express.json())

// app.get("/" , (req,res)=>{ 

//     res.send("Ameen")
//     console.log('hello world');
// })


app.post("/post" , async(req,res)=>{
    const user = new data(req.body)
    await user.save()
    return res.send("data added")
})


const dbConnect = async()=>{
    await mongoose.connect("mongodb://localhost:27017/details")
    console.log("connect with database");
}
dbConnect()



app.listen(port ,()=>{
    console.log(`this server is running ${port}`);
})