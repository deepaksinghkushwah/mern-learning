import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import {getDB} from "./db/getDB.js";
import "dotenv/config";


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*'
}));

const connectDB = getDB();

connectDB().catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use('/events', eventsRoute);


app.get("/", (req, res) => {
  res.json({ message: "Welcome to nodejs API project" });
});

app.listen(port, () => {
  console.log(`App server is running on http://localhost:${port}`);
});
