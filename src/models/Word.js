import mongoose, { mongo } from "mongoose";

const wordSchema = new mongoose.Schema({
    word: { type: String, required: true, trim: true },
    pronun: { type: String, trim: true },
    mean: [{ type: String, trim: true }],
    example: { type: String },
    createdAt: { type: Date, default: Date.now, required: true }
})

const Word = mongoose.model("Word", wordSchema);
export default Word;