import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    roll: {
        type : Number,
    }
})


const data = mongoose.model("xyz", userSchema)

export default data

