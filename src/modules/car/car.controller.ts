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

export const carControllers = {
  createCar,
  getAllCars,
};
