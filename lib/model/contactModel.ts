import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: String,
    email:String,
    message:String,
    date: {type:String, default: () => new Date().toLocaleString("en-US", { timeZone: "UTC" })}
})

export const contactData = mongoose.models.connects || mongoose.model("connects",contactSchema)

