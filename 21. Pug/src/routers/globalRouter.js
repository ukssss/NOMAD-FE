import express from "express";
import { handleTrend, handleNew } from "../controllers/storyController";
import { handleJoin, handleLogin } from "../controllers/userController";

const globalRouter = express.Router();
const home = (req, res) => res.render("home");

globalRouter.get("/", home);
globalRouter.get("/trending", handleTrend);
globalRouter.get("/new", handleNew);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);

export default globalRouter;
