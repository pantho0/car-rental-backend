import { TUser } from "./user.interface";
import { Request, Response } from "express";

import { User } from "./user.model";
import { UserServices } from "./user.service";
import jwt from "jsonwebtoken";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone, address } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) return res.status(200).json({ message: "User already exists" });

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

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });
    res.json({ token, user });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const UserController = {
  createUser,
  signIn,
};
