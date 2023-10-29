
import mongoose from "mongoose"

let isConnected=false;

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true)
    if(!process.env.MONGODB_URl) return console.log('MONGODB_URL not found')
    if(isConnected) return console.log('ALready connected to Mongodb');
    
    try {
        await mongoose.connect(process?.env?.MONGODB_URL || "")
        // await mongoose.connect('mongodb+srv://hardeepsinhparmar2020:uYefH3hR2ZRQqswf@cluster0.zmmvg4g.mongodb.net/?retryWrites=true&w=majority')
        isConnected=true;
        console.log('connected to mongo db');
        
    } catch (error) {
    console.log(error);
    
    }
}
