import * as mongoose from "mongoose";

export const CarSchema = new mongoose.Schema({
    brand: String,
    color: String,
    model: String,
});

