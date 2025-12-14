import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "SUccess" });
});

app.listen(3000, () => console.log("Server is up and running"));
