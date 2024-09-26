import { Request, Response } from "express";
import { Car } from "./car.model";

const createCar = async (req: Request, res: Response) => {
  try {
    const { name, description, color, isElectric, features, pricePerHour } = req.body;
    const car = await Car.create({ name, description, color, isElectric, features, pricePerHour });

    res.json({
      success: true,
      statusCode: 201,
      message: "Car created successfully",
      data: car,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const car = await Car.find({ isDeleted: false });
    res.json({
      success: true,
      statusCode: 200,
      message: "Cars retrieved successfully",
      data: car,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.id;
    const car = await Car.findById(carId);
    if (!car || car.isDeleted) return res.status(404).json({ message: "Car not found" });
    res.json({
      success: true,
      statusCode: 200,
      message: "A Car retrieved successfully",
      data: car,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const updateCarId = req.params.id;
    const car = await Car.findByIdAndUpdate(updateCarId, req.body, { new: true });
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json({
      success: true,
      statusCode: 200,
      message: "Car updated successfully",
      data: car,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const carControllers = {
  createCar,
  getAllCars,
  getSingleCar,
  updateCar,
};
