import express from "express";
import { getChangePassword, getEdit, logout, postChangePassword, postEdit, see } from "../controller/userController";
import { avatarUpload, protectorMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(avatarUpload.single("avatar"), postEdit);
userRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword).post(postChangePassword)
userRouter.get("/:id", protectorMiddleware, see)

export default userRouter;