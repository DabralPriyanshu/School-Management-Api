import express from "express";
import { fileURLToPath } from "url";
import path from "path";

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import ENV from "./config/server.config.js";
import { checkConnection } from "./config/db.config.js";
import apiRoutes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  try {
    // '..' tells the computer: "Go up one level from src to the root"

    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  } catch (error) {
    console.log(error);
    next(error);
  }
});

app.use("/api", apiRoutes);
app.use(errorHandler);
app.listen(ENV.PORT, async () => {
  await checkConnection();
  console.log(`Server started at http://localhost:${ENV.PORT}`);
});
