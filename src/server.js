import express from "express";
import ENV from "./config/server.config.js";
import { checkConnection } from "./config/db.config.js";
const app = express();

app.listen(ENV.PORT, async () => {
  await checkConnection();
  console.log(`Server started at http://localhost:${ENV.PORT}`);
});
