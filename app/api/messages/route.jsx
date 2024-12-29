import { ,NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { contactData } from "@/lib/model/contactModel";
export async function POST (){
    // const {email, password } = req.body;
    await dbConnect();
    try {
        const result = await contactData.find();
        return NextResponse.json({message:"Data Fetched Succesfuly",status:200,result:result})
    } catch (error) {
        return NextResponse.json({message:'Message Not Sent',status:500, meassgae:error})
    }

}