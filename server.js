import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/DbConfig.js"
import router from "./routes/StudentRoutes.js"
const app = express();
dotenv.config();
//JSON

app.use(express.json());
app.use(express.urlencoded());

///----load Routes---//
app.use("/api/user",router);

const corsoption = {
  origin: process.env.CORS_ORIGIN,
  method: ["post", "get"],
  credentials: false,
};

//cors policy
app.use(cors(corsoption));

const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;
///database connection
connectDb(DATABASE_URL);

app.get("/user", (req, res) => {
  res.send({ message: "success" });
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
