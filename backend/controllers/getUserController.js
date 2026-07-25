import client from "../database/db.js"

export const getuser = async (req, res) => {
    try {
        const result = await client.query(`
            SELECT id, name, register_number, department, email, password, role FROM users
            `)

        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "server Error"
        })
    }
};