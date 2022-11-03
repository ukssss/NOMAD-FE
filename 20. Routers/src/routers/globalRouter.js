import express from "express";
import { join, login } from "../controllers/userController";
import { search } from "../controllers/videoController";

const globalRouter = express.Router();
const home = (req, res) => res.send("Home Page");

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
