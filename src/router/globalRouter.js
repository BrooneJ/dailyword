import express from "express";
import { getJoin, postJoin } from "../controller/userController";
import { home, search } from "../controller/wordController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/search").get(search);

export default globalRouter;