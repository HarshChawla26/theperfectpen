import mongoose, { mongo } from "mongoose";

let isConnected = 'false';

export const connectDB = async()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('Database is already connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
               useCreateIndex: true,
        },
        (err) => {
         if(err) console.log(err) 
         else console.log("mongdb is connected");
        })  

        isConnected = true;

        console.log('MongoDB connected')

    }catch(err){
        console.log(err);
    }
}
