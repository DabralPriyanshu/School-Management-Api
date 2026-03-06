import express from "express";

const schoolRouter = express.Router();
schoolRouter.get("/addSchool", (req, res) => {
  throw new Error("error");
});
export default schoolRouter;
