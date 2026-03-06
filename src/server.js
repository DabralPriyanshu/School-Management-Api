import express from "express";
import ENV from "./config/server.config.js";
import { checkConnection } from "./config/db.config.js";
import apiRoutes from "./routes/index.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.listen(ENV.PORT, async () => {
  await checkConnection();
  console.log(`Server started at http://localhost:${ENV.PORT}`);
});
