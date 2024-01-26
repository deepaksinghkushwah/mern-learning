import express from "express";
import { createEvent, getEvents, getEventWithId, deleteEventWithId, updateEventWithId, getEventWithSlug } from "../controllers/events.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.get('/', getEvents);

router.post("/", createEvent);

router.get("/:slug", getEventWithSlug); 

router.delete("/:slug", deleteEventWithId);

router.patch("/:slug", updateEventWithId);

export default router;