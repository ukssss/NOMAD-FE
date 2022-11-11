import express from "express";
import { home, movieDetail, filterMovie, getUpload, postUpload } from "../controllers/movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/:id(\\d+)", movieDetail);
movieRouter.get("/filter", filterMovie);
movieRouter.route("/add").get(getUpload).post(postUpload);

export default movieRouter;
