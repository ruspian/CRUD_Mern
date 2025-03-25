import express from "express";
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controller/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", addUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
