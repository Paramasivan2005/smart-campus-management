import express from "express"
import { Server } from "socket.io"
import { createServer } from "node:http"
import "./database/db.js";
import cors from "cors"
import dotenv from 'dotenv'
import createUserRoute from './routes/createUserRoute.js'
import login from './routes/loginRoute.js'
import getUser from './routes/getUserRoute.js'
import report from './routes/reportRoutes.js'
import pendingReport from "./routes/pendingreportRoute.js"

dotenv.config()


const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/', createUserRoute);
app.use('/', login);
app.use('/', getUser)
app.use('/', report)
app.use('/', pendingReport)

const server = createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
    res.send("server is running") 
})


app.listen(PORT, () => {
    console.log(`server running in the ${PORT}`);
});
