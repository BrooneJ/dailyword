import express from "express";
import morgan from "morgan";

import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import wordRouter from "./router/wordRouter";


const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")

app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/words", wordRouter);

export default app;