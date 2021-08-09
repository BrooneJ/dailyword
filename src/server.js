import express from "express";
import morgan from "morgan";
import session from "express-session";

import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import wordRouter from "./router/wordRouter";
import { localsMiddleware } from "./middlewares";


const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "sf234hwe4sefg",
    resave: true,
    saveUninitialized: true,
}))

app.use(localsMiddleware);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/words", wordRouter);

export default app;