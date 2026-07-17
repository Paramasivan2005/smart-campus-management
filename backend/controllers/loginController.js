import client from "../database/db.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const result = await client.query(`SELECT * FROM users WHERE email = $1 AND password = $2`,
            [email, password]
        );
        if (result.rows.length === 0) {
            return res.status(401).json({
                message: "invalid credentials"
            })
        }
        const user = result.rows[0];

        const token = jwt.sign({
            id: user.id,
            role: user.role
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            })
        res.status(200).json({
            message: "login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "server error"
        })
    }
}