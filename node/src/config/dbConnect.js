import mongoose, { mongo } from "mongoose";

export async function conectaDB() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

