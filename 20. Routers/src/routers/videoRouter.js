import express, { Router } from "express";
import { watchVideo, editVideo, deleteVideo, commentsVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watchVideo);
videoRouter.get("/edit", editVideo);
videoRouter.get("/delete", deleteVideo);
videoRouter.get("/comments", commentsVideo);

export default videoRouter;
