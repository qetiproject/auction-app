import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@example-db.0ogvtfp.mongodb.net/?retryWrites=true&w=majority&appName=example-db"
    );
    console.log("connected mongoDB");
  } catch (error) {
    console.log("db error");
  }
}
