import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Billing API is running...");
});

// TODO: import and use routes later
// import authRoutes from "./routes/authRoutes.js";
// app.use("/api/auth", authRoutes);

export default app;
