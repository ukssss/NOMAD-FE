import express from "express";
import { watchStory, editStory, deleteStory } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", watchStory);
storyRouter.get("/:id(\\d+)/edit", editStory);
storyRouter.get("/:id(\\d+)/delete", deleteStory);

export default storyRouter;
