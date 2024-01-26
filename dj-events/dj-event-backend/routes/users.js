import express from "express";
import {createUser, deleteUserWithId, getUsers, getUserWithId, updateUserWithId} from "../controllers/users.js";
import auth from "../middlewares/auth.js";
const router = express.Router();



router.get('/', getUsers);

router.post("/", createUser);

router.get("/:id",auth, getUserWithId); 

router.delete("/:id", deleteUserWithId);

router.patch("/:id", updateUserWithId);

export default router;