import express from "express";
import schoolController from "../../controllers/school.controller.js";
import schoolMiddlewares from "../../middlewares/school.middlewares.js";
const schoolRouter = express.Router();
schoolRouter.post(
  "/addSchool",
  schoolMiddlewares.validateCreateSchoolRequest,
  schoolController.addSchool,
);
schoolRouter.get("/listSchools", schoolController.listSchools);
export default schoolRouter;
