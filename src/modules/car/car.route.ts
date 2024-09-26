import express from "express";
import { carControllers } from "./car.controller";
const router = express.Router();

router.post("/", carControllers.createCar);

export const CarRoutes = router;
