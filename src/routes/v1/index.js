import express from "express";
import schoolRoutes from "./school.routes.js";
const v1Router = express.Router();
v1Router.use("/schools", schoolRoutes);
export default v1Router;
