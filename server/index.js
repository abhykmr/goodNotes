import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./configs/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoute.js";
// import { errorHandler } from "./utils/error.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
  ConnectDB();
});

// routing
app.use("/api/auth", authRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500; // Fix: Use `status` instead of `statusCode`
  const message = err.message || "Internal server error!";

  return res.status(statusCode).json({
    success: false, // Fix: `failed` was undefined
    statusCode,
    message,
  });
});
