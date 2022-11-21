import express from "express";
import { logout, see, startGithubLogin, finishGithubLogin, getEdit, postEdit } from "../controllers/userController";
import { protectorMiddleware, publicMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicMiddleware, finishGithubLogin);
userRouter.get(":id", see);

export default userRouter;
