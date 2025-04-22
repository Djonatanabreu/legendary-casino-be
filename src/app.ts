import express from "express";
import cors from "cors";
import path from "path";
import { config } from "./config/server";
import gameRoutes from "./routes/gameRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Serve static files from the public directory
app.use("/public", express.static(path.join(__dirname, "../public")));
app.use("/assets", express.static(path.join(__dirname, "../public/assets")));

// Routes
app.use("/api", gameRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
