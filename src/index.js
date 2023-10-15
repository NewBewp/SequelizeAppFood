import express from "express";
import cors from "cors";
import { rootRouter } from "./router/rootRoutes.js";
const app = express();

app.use(express.json());
app.use(cors()); // để tất các hệ thống FE kết nối đến 
app.listen(8888);
app.use("/api", rootRouter);
