import express from "express";
import { getJoin, getLogin, postJoin, postLogin } from "../controller/userController";
import { home, search } from "../controller/wordController";
import { publicOnlyMiddleware } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
globalRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin);
globalRouter.route("/search").get(search);

export default globalRouter;