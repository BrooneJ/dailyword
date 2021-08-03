import express from "express";
import { deleteWord, detail, getEdit, getUpload, postEdit, postUpload } from "../controller/wordController";

const wordRouter = express.Router();

wordRouter.get("/:id([0-9a-f]{24})", detail);
wordRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
wordRouter.route("/:id([0-9a-f]{24})/delete").get(deleteWord);
wordRouter.route("/upload").get(getUpload).post(postUpload);

export default wordRouter;