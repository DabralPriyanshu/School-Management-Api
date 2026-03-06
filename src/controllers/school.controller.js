import db from "../config/db.config.js";

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
export default { addSchool };
