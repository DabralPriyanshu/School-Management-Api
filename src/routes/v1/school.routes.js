import express from "express";
import schoolController from "../../controllers/school.controller.js";
const schoolRouter = express.Router();
schoolRouter.post("/addSchool", schoolController.addSchool);
export default schoolRouter;
