import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI)
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

// linkedin post about why we use this pattern in serverless - coz every endpoint will create a new connection to the database, which is not good for performance - connectToDatabase().then(() => { // your code here }
