import express from "express";
import morgan from "morgan";
import router from "../routes/autopia.routes.js";
import { todo } from "node:test";

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

app.use(morgan("dev"));
app.use(express.json());

export default app;
