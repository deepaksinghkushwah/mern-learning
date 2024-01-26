import express from "express";
import * as property from "../controllers/properties.js";
import advancedResults from "../middlewares/advanceResults.js";
import auth from "../middlewares/auth.js";
import PropertyModel from "../models/properties.js";

const router = express.Router();

router.get("/populate",auth, property.populate);

router.get('/', property.getAll);

router.post("/",auth, property.create);

router.get("/:slug", property.getWithSlug); 

router.delete("/:slug",auth, property.deleteWithId);

router.patch("/:slug",auth, property.updateWithId);



export default router;