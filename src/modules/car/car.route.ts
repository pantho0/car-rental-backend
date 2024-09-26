import express from "express";
import { carControllers } from "./car.controller";
const router = express.Router();

router.post("/", carControllers.createCar);
router.get("/", carControllers.getAllCars);
router.get("/:id", carControllers.getSingleCar);

export const CarRoutes = router;
