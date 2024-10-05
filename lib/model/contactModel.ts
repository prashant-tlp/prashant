import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: String,
    email:String,
    message:String,
    date: {type:Date, default:Date.now}
})

export const contactData = mongoose.models.connects || mongoose.model("connects",contactSchema)

