import express from "express";
import UserController from "./user.controllers.js";

const UserRouter = express.Router();

UserRouter.post("/", UserController.createUser);

UserRouter.get("/", UserController.getUsers);

UserRouter.get("/:userId", UserController.getUserById);

UserRouter.delete("/:userId", UserController.deleteUser);

export default UserRouter;
