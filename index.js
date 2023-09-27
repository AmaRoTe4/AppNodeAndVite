import express from "express";
import cors from "cors";
import path from "path";
import __dirname from "./dirname.js";
import { Router } from "./backend/routes/index.js"

const app = express();
const port = process.env.PORT || 20034;

app.use(cors());

//render api
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", Router);

//render frontend
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Servidor to http://localhost:${port}`);
});

