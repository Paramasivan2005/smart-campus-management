import client from '../database/db.js'

export const createReport = async (req, res) => {
    try {
        const { title, category, description } = req.body;
        const user_id = req.user.id;

        if (!title || !category || !description) {
            return res.status(400).json({
                message: "all fields are required"
            })
        }

        const result = await client.query(`
            INSERT INTO reports(user_id, title, category, description) VALUES($1, $2, $3, $4) RETURNING *
            `, [user_id, title, category, description])
        res.status(201).json({
            message: "complaint submitted successfully",
            report: result.rows[0],
        })

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Server Error",
        });
    }
}