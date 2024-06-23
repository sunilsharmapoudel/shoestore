import mongooose from "mongoose";

const connectDB = async () => {
    try {
        let conn = await mongooose.connect(process.env.MONGODB_URI)
        console.log(`Connected to DB at ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`Error while connect to DB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;