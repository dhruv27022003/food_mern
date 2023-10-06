import { connect } from 'mongoose';

export const dbConnect = async () => {
    console.log("calling")
    try {
        await connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
