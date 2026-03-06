import db from "../config/db.config.js";
import calculateDistance from "../utils/calculateDistance.js";

const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  try {
    const [result] = await db.execute(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude],
    );
    res.status(201).json({
      message: "School added successfully",
      data: { schoolId: result.insertId },
      success: true,
      err: {},
    });
  } catch (error) {
    next(error);
  }
};
const listSchools = async (req, res) => {
  try {
    const latitude = req.query?.latitude;
    const longitude = req.query?.longitude;
    if (!latitude || !longitude) {
      const [schools] = await db.execute("SELECT * FROM schools");
      return res.status(200).json({
        message: "Successfully fetched all the schools",
        data: schools,
        success: true,
        err: {},
      });
    } else {
      const [schools] = await db.execute("SELECT * FROM schools");
      const userLat = parseFloat(latitude);
      const userLon = parseFloat(longitude);
      const sortedSchools = schools
        .map((school) => ({
          ...school,
          distance: calculateDistance(
            userLat,
            userLon,
            school.latitude,
            school.longitude,
          ),
        }))
        .sort((a, b) => a.distance - b.distance);
      return res.status(200).json({
        message: "Successfully fetched all the schools",
        data: sortedSchools,
        success: true,
        err: {},
      });
    }
  } catch (error) {
    next(error);
  }
};
export default { addSchool, listSchools };
