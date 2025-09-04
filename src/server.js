import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();
dotenv.config({ debug: false });

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI 

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.clear()
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
