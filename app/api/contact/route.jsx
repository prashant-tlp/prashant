import {NextResponse } from "next/server";
import nodemailer from 'nodemailer'
import dbConnect from "@/lib/dbConnect";
import { contactData } from "@/lib/model/contactModel";

export async function POST(request) {
    const req = await request.json()
    await dbConnect()
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.user_email, 
            pass: process.env.user_pass,
        },
    });

    const mailOptions = {
        from: process.env.user_email,
        to: req.email,
        subject: `Thanks for Connecting`,
        text: `Hello ${req.name}, I've received your message and will get to you shortly`,
    };

    try {
        
        const formData = await new contactData(req);
        const result = await formData.save();
        await transporter.sendMail(mailOptions)
        return NextResponse.json({message:'Message Sent', status:200,result:result})
    } catch (error) {
        return NextResponse.json({message:'Message Not Sent',status:500, meassgae:error})
    }
}
