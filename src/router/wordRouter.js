import express from "express";
import { deleteWord, detail, getEdit, getUpload, postEdit, postUpload } from "../controller/wordController";
import { protectorMiddleware } from "../middlewares";

const wordRouter = express.Router();

wordRouter.get("/:id([0-9a-f]{24})", detail);
wordRouter.route("/:id([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
wordRouter.route("/:id([0-9a-f]{24})/delete").all(protectorMiddleware).get(deleteWord);
wordRouter.route("/upload").all(protectorMiddleware).get(getUpload).post(postUpload);

export default wordRouter;