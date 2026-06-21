import client from "../database/db.js";

export const createUser = async (req, res) => {
    try {
        const { name, register_number, department, email, password, role } = req.body;

        if (!name || !register_number || !department || !email || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const result = await client.query(`INSERT INTO users ( name, register_number, department, email, password, role ) 
            VALUES( $1,$2,$3,$4,$5,$6 ) RETURNING *`,
            [name, register_number, department, email, password, role]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "server error"
        })
    };
};