import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { dbConnect } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";

import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statsRoutes from "./routes/stat.route.js";
import cors from "cors";

// sab chal raha

import fileUpload from "express-fileupload";
import path from "path";

const __dirname = path.resolve();
const app = express();
app.use(cors({
  origin:"http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  })
);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);

app.use((err, req, res, next) => {
  res
    .status(500)
    .json({
      message:
        process.env.NODE_ENV === "production"
          ? "Internal server error"
          : err.message,
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  dbConnect();
});
