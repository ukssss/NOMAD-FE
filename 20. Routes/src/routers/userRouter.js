import express from "express";
import { handleUser, handlePerUser, handleEditUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", handleUser);
userRouter.get("/:id(\\d+)", handlePerUser);
userRouter.get("/edit-profile", handleEditUser);

export default userRouter;
