import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:fmtSCNoQYftNx5us@alura.yea55fb.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
