import client from "../database/db.js";

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const result = await client.query(`SELECT * FROM users WHERE email = $1 AND password = $2 AND role = $3`,
            [email, password, role]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "server error"
        })
    }
}