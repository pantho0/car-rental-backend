import { TUser } from "./user.interface";
import { Request, Response } from "express";

import { User } from "./user.model";
import jwt from "jsonwebtoken";
import { MovieServices } from "../movies/movie.service";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone, address } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = await UserServices.createUser({ name, email, password, phone, address } as TUser);

    res.status(200).json({
      success: true,
      message: "User registered successfully ",
      data: user.user,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const UserController = {
  createUser,
};
