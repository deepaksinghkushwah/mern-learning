import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import propertiesRoute from "./routes/properties.js";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());

const connectDB = async () => {
  await mongoose.connect(process.env.DB_DNS);
};

connectDB().catch((err) => console.log(err));



app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use('/properties', propertiesRoute);


app.get("/", (req, res) => {
  res.json({ message: "Server is up and running" });
});

app.listen(port, () => {
  console.log(`App server is running on http://localhost:${port}`);
});
