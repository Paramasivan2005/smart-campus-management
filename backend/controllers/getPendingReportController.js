import client from "../database/db.js";

export const getPendingReports = async (req, res) => {
  try {
    const result = await client.query(
      `SELECT
          reports.id,
          reports.title,
          reports.category,
          reports.description,
          reports.status,
          reports.created_at,
          users.name AS student_name,
          users.email
       FROM reports
       JOIN users
       ON reports.user_id = users.id
       WHERE reports.status = 'Pending'
       ORDER BY reports.created_at DESC`
    );

    res.status(200).json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};