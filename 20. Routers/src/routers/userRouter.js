import express from "express";
import { seeUser, logoutUser, editUser, deleteUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", seeUser);
userRouter.get("/:id(\\d+)/logout", logoutUser);
userRouter.get("/:id(\\d+)/edit", editUser);
userRouter.get("/:id(\\d+)/delete", deleteUser);

export default userRouter;
