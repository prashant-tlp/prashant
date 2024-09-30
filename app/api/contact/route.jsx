import { NextRequest,NextResponse } from "next/server";
const nodemailer =require("nodemailer")

export async function POST(request) {
    const req = await request.json()
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'prashantsinghrajput56@gmail.com' , 
            pass: 'kbfy zxvh xdum sqqh',
        },
    });

    const mailOptions = {
        from: 'prashantsinghrajput56@gmail.com',
        to: req.email,
        subject: `Thanks for Connecting`,
        text: `Hello ${req.name}, I've received your message and will get to you shortly`,
    };

    try {
        await transporter.sendMail(mailOptions)
        return NextResponse.json({message:'Message Sent', status:200})
    } catch (error) {
        return NextResponse.json({message:'Message Not Sent',status:500, meassgae:error})
    }
}
