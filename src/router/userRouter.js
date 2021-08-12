import express from "express";
import { getChangePassword, getEdit, logout, postEdit, see } from "../controller/userController";
import { protectorMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword)
userRouter.get("/:id", protectorMiddleware, see)

export default userRouter;