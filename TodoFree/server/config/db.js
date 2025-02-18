import mongoose from "mongoose"

 const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://todolist:Harsh%40123@cluster0.ssfkc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database connected")
    } catch (error) {
     console.error("The Error : "+error);
        
    }
}

export default connectDB
