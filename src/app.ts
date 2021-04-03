import "reflect-metadata";
import express from "express";
import { config } from "dotenv";
import { router } from "./routes";
import Connection from "./services/Connect";

config();

const connection = new Connection();
const app = express();

app.use(express.json());
app.use(router);

connection.Connect();

app.listen(3333, () => {
  console.log("App Start Port 3333 🚀");
});
