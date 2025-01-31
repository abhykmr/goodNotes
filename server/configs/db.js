import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database is connected: ${conn.Connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default ConnectDB;
