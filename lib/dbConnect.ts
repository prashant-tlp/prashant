
import mongoose from "mongoose";

type connectionObject = {
    isConnected ?: number;
}
const connection : connectionObject = {}

export default async function dbConnect():Promise<void> {
    if (connection.isConnected){
        console.log("db already connected");
        return
    }
    try {
        const dbConnect = await mongoose.connect(process.env.mongo_uri || '' , {} )
        connection.isConnected = dbConnect.connections[0].readyState;
        console.log("db connected")
        
    } catch (error) {
        console.log("error connecting db", error)
        process.exit(1);
    }

}