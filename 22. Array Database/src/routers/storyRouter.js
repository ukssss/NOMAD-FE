import express from "express";
import { watchStory, getEdit, postEdit, getUpload, postUpload } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", watchStory);
storyRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
storyRouter.route("/upload").get(getUpload).post(postUpload);

export default storyRouter;
