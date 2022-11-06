import express from "express";
import { home, handleTrend, handleNew } from "../controllers/storyController";
import { handleJoin, handleLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", handleTrend);
globalRouter.get("/new", handleNew);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);

export default globalRouter;
