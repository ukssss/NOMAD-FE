import express from "express";
import morgan from "morgan";
import path from "path";
import "./db";
import "./models/Movie";
import movieRouter from "./routers/movieRouter";
import { localsMiddleware } from "./middlewares";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use(logger);

app.use("/", movieRouter);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
