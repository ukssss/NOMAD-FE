import express from "express";
import { home } from "../controllers/storyController";
import { handleJoin, handleLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);

export default globalRouter;
