import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connection',()=>{
        //  console.log("DB Connected");
         
    })
    console.log("DB Connected");

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connectDB;