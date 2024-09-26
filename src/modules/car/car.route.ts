import express from "express";
import { carControllers } from "./car.controller";
const router = express.Router();

router.post("/", carControllers.createCar);
router.get("/", carControllers.getAllCars);
router.get("/:id", carControllers.getSingleCar);
router.patch("/:id", carControllers.updateCar);
router.delete("/:id", carControllers.deleteSingleCar);

export const CarRoutes = router;
