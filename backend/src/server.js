import express from "express";
import { ENV } from "./config/env.js";
import path from "path";
import { connectDb } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();

const __dirname = path.resolve();

app.use(clerkMiddleware()); //adds auth object under the req

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Success" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/{*any}", (req, res) =>
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"))
  );
}
app.listen(ENV.PORT, () => {
  // console.log("Server is up and running");
  connectDb();
});
