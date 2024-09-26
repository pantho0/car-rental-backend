import express from "express";
import { carControllers } from "./car.controller";
const router = express.Router();

router.post("/", carControllers.createCar);
router.get("/", carControllers.getAllCars);

export const CarRoutes = router;
