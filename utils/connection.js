import mongoose from "mongoose";

const connectionDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)

        if (!connect) {
            console.log("Error connecting to MongoDB");
            return;
        }
        console.log(`MongoDB connected: ${connect.connection.host}`);
        

    }
    catch (error) {
        console.log(error);
    }
}

export default connectionDB;