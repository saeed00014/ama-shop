import { fileURLToPath } from "url";
import path from "path"
import { dirname } from "path";
import express from "express";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hostname = "localhost";
const port = 9999;

app.use("/", express.static(path.join(__dirname, "./dist")));

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
