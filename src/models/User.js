import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    nation: String
})

const User = mongoose.model("User", userSchema);

export default User;