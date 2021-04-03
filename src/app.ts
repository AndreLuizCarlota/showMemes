import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import Connect from "./services/Connect";

const app = express();
app.use(express.json());

app.use(router);
Connect({ connectionString: "mongodb://localhost:27017/showMemes" });

app.listen(3333, () => {
  console.log("App Start Port 3333 🚀", process.env.SECRET_KEY);
});
