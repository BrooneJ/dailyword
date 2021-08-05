import mongoose, { mongo } from "mongoose";

const wordSchema = new mongoose.Schema({
    word: String,
    pronum: String,
    mean: String,
    example: String,
    createdAt: Date
})

const Word = mongoose.model("Word", wordSchema);
export default Word;