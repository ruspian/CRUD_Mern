import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
const PORT = 5050;

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/CRUD_mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("berhasil terhubung ke database"));

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use(UserRoute);

app.listen(PORT, () => {
  console.log(`server berjalan di http://localhost:${PORT}`);
});
