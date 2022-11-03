import express from "express";
import { watchVideo, editVideo, deleteVideo, commentsVideo, uploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", watchVideo);
videoRouter.get("/:id(\\d+)/edit", editVideo);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/:id(\\d+)/comments", commentsVideo);

export default videoRouter;
