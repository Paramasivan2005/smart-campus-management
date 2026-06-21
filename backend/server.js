import express from "express"
import { Server } from "socket.io"
import { createServer } from "node:http"
import "./database/db.js";
import cors from "cors"
import dotenv from 'dotenv'
import createUserRoute from './routes/createUserRoute.js'

dotenv.config()


const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/', createUserRoute)

const server = createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
    res.send("server is running") 
})


app.listen(PORT, () => {
    console.log(`server running in the ${PORT}`);
});
