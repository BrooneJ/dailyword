import express from "express";
import { getChangePassword, getEdit, logout, postEdit, see } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.route("/change-password").get(getChangePassword)
userRouter.get("/:id", see)

export default userRouter;