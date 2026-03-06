import mysql from "mysql2";
import ENV from "./server.config.js";
const pool = mysql.createPool({
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME,
  port: ENV.DB_PORT,
});

export const checkConnection = async () => {
  try {
    const connection = await pool.promise().getConnection();
    console.log(" MySQL Database connected successfully!");
    connection.release();
  } catch (err) {
    console.log(err);
    console.error(" Database connection failed!");
    process.exit(1);
  }
};

export default pool.promise();
