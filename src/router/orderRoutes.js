import express from "express";
import { userOrder } from "../controller/orderController.js";

export const orderRoutes = express.Router()


orderRoutes.post("/", userOrder)